"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 10_000;
const STAR_PARTICLE = "../star.png";

export default function ThreeJs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();
    const star = loader.load(STAR_PARTICLE);

    // Particles Geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = PARTICLE_COUNT;
    const positionArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positionArray, 3)
    );

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      map: star,
      transparent: true,
    });

    // Particles Mesh
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Resize Listener
    const resizeListener = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", resizeListener);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 2;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color("#21282a"));

    // Mouse and Animation
    let mouseX = 0;
    let mouseY = 0;
    const mousePos = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    const currentRotation = new THREE.Quaternion();

    const animateParticles = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      mousePos.x = (mouseX / window.innerWidth) * 2 - 1;
      mousePos.y = -(mouseY / window.innerHeight) * 2 + 1;

      targetRotation.x = mousePos.y * Math.PI * 0.1;
      targetRotation.y = mousePos.x * Math.PI * 0.1;
    };

    document.addEventListener("mousemove", animateParticles);

    // Animate
    const tick = () => {
      const targetQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(targetRotation.x, targetRotation.y, 0, "YXZ")
      );
      currentRotation.slerp(targetQuaternion, 0.07);
      particlesMesh.setRotationFromQuaternion(currentRotation);

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeListener);
      document.removeEventListener("mousemove", animateParticles);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="three-js-landing fixed w-full h-full bg-cover"
    ></canvas>
  );
}
