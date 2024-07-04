"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import Loading from "../loading";

const MOBILE_PARTICLE_COUNT = 5000;
const DESKTOP_PARTICLE_COUNT = 7500;
const STAR_PARTICLE = "../star.png";

export default function ThreeJs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSize({ width, height });
      setIsMobile(width < 768);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const loader = new THREE.TextureLoader();
    
    let animationFrameId: number;
    let onMouseMove: ((event: MouseEvent) => void) | null = null;
    let onTouchMove: ((event: TouchEvent) => void) | null = null;

    loader.load(STAR_PARTICLE, 
      (star) => {
        const particleCount = isMobile ? MOBILE_PARTICLE_COUNT : DESKTOP_PARTICLE_COUNT;
        const particlesGeometry = new THREE.BufferGeometry();
        const positionArray = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
          positionArray[i] = (Math.random() - 0.5) * 5;
        }

        particlesGeometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(positionArray, 3)
        );

        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.005,
          map: star,
          transparent: true,
          blending: THREE.AdditiveBlending,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        const pointLight = new THREE.PointLight(0xffffff, 0.1);
        pointLight.position.set(2, 3, 4);
        scene.add(pointLight);

        const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 100);
        camera.position.z = 2;
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
        rendererRef.current = renderer;
        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(new THREE.Color("#21282a"));

        const mouse = new THREE.Vector2();
        let mouseX = 0;
        let mouseY = 0;

        const updateMousePosition = (event: MouseEvent | TouchEvent) => {
          const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
          const y = 'touches' in event ? event.touches[0].clientY : event.clientY;

          mouse.x = (x / size.width) * 2 - 1;
          mouse.y = -(y / size.height) * 2 + 1;

          mouseX = x - size.width / 2;
          mouseY = y - size.height / 2;
        };

        onMouseMove = (event: MouseEvent) => {
          updateMousePosition(event);
        };

        onTouchMove = (event: TouchEvent) => {
          if (event.touches.length > 0) {
            updateMousePosition(event);
          }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);

        const animate = () => {
          if (!particlesMesh || !camera || !renderer) return;

          // Adjust base rotation speed
          const baseRotationSpeed = 0.0002;
          particlesMesh.rotation.x += baseRotationSpeed;
          particlesMesh.rotation.y += baseRotationSpeed;

          // Calculate normalized mouse position for smoother effect
          const normalizedMouseX = mouse.x * 0.5;
          const normalizedMouseY = mouse.y * 0.5;

          // Apply easing to the rotation for smoother movement
          const easing = 0.05;
          particlesMesh.rotation.y += (normalizedMouseX - particlesMesh.rotation.y) * easing;
          particlesMesh.rotation.x += (-normalizedMouseY - particlesMesh.rotation.x) * easing;

          // Adjust camera movement for parallax effect
          const parallaxStrength = isMobile ? 0.00005 : 0.0001;
          camera.position.x += (mouseX * parallaxStrength - camera.position.x) * easing;
          camera.position.y += (-mouseY * parallaxStrength - camera.position.y) * easing;
          camera.lookAt(scene.position);

          renderer.render(scene, camera);
          animationFrameId = requestAnimationFrame(animate);
        };

        setIsLoading(false);
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading star texture:", error);
        setIsLoading(false);
      }
    );

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (onMouseMove) window.removeEventListener("mousemove", onMouseMove);
      if (onTouchMove) window.removeEventListener("touchmove", onTouchMove);
      if (rendererRef.current) rendererRef.current.dispose();
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            } else if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            }
          }
        });
        sceneRef.current.clear();
      }
    };
  }, [isMounted, size, isMobile]);

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <>
      {isLoading && <Loading />}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full bg-cover touch-none"
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </>
  );
}