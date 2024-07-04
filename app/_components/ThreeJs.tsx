"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import Loading from "../loading";

const MOBILE_PARTICLE_COUNT = 5000;
const DESKTOP_PARTICLE_COUNT = 10000;
const STAR_PARTICLE = "../star.png";

export default function ThreeJs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesMeshRef = useRef<THREE.Points | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSize({ width, height });
      setIsMobile(width < 768);

      if (rendererRef.current && sceneRef.current) {
        const camera = sceneRef.current.children.find(
          (child) => child instanceof THREE.PerspectiveCamera
        ) as THREE.PerspectiveCamera;
        if (camera) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }
        rendererRef.current.setSize(width, height);
      }
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
    const mouse = new THREE.Vector2();
    let mouseX = 0;
    let mouseY = 0;

    const updateMousePosition = (event: MouseEvent | TouchEvent) => {
      const x = "touches" in event ? event.touches[0].clientX : event.clientX;
      const y = "touches" in event ? event.touches[0].clientY : event.clientY;

      mouse.x = (x / size.width) * 2 - 1;
      mouse.y = -(y / size.height) * 2 + 1;

      mouseX = x - size.width / 2;
      mouseY = y - size.height / 2;
    };

    const onMouseMove = (event: MouseEvent) => updateMousePosition(event);
    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) updateMousePosition(event);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    loader.load(
      STAR_PARTICLE,
      (star) => {
        const particleCount = isMobile
          ? MOBILE_PARTICLE_COUNT
          : DESKTOP_PARTICLE_COUNT;
        const particlesGeometry = new THREE.BufferGeometry();
        const positionArray = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
          positionArray[i] = (Math.random() - 0.5) * 5;
        }

        particlesGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positionArray, 3)
        );

        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.005,
          map: star,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        const particlesMesh = new THREE.Points(
          particlesGeometry,
          particlesMaterial
        );
        particlesMeshRef.current = particlesMesh;
        scene.add(particlesMesh);

        const camera = new THREE.PerspectiveCamera(
          75,
          size.width / size.height,
          0.1,
          100
        );
        camera.position.z = 2;
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: false,
          powerPreference: "high-performance",
        });
        rendererRef.current = renderer;
        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(new THREE.Color("#21282a"));

        const animate = () => {
          if (!particlesMesh || !camera || !renderer) return;

          const baseRotationSpeed = 0.0001;
          particlesMesh.rotation.x += baseRotationSpeed;
          particlesMesh.rotation.y += baseRotationSpeed;

          const normalizedMouseX = mouse.x * 0.3;
          const normalizedMouseY = mouse.y * 0.3;

          const easing = 0.03;
          particlesMesh.rotation.y +=
            (normalizedMouseX - particlesMesh.rotation.y) * easing;
          particlesMesh.rotation.x +=
            (-normalizedMouseY - particlesMesh.rotation.x) * easing;

          const parallaxStrength = isMobile ? 0.00003 : 0.00006;
          camera.position.x +=
            (mouseX * parallaxStrength - camera.position.x) * easing;
          camera.position.y +=
            (-mouseY * parallaxStrength - camera.position.y) * easing;
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
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
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
        style={{ display: isLoading ? "none" : "block" }}
      />
    </>
  );
}
