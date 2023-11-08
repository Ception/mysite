import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { QwikLogo, BunLogo, TailwindLogo, ThreeJsLogo } from "./Logos";
import * as THREE from "three";

interface Sizes {
  width: number;
  height: number;
}

export const ThreeJsLandingPage = component$(() => {
  useVisibleTask$(() => {
    // texture loader
    const loader: THREE.TextureLoader = new THREE.TextureLoader();
    const star = loader.load("/textures/star.png");

    // Canvas
    const canvas = document.querySelector(
      "canvas.three-js-landing",
    ) as HTMLCanvasElement;

    // Scene
    const scene: THREE.Scene = new THREE.Scene();

    // Objects
    const geometry: THREE.TorusGeometry = new THREE.TorusGeometry(
      0.7,
      0.2,
      16,
      120,
    );

    const particlesGeometry: THREE.BufferGeometry = new THREE.BufferGeometry();
    const particlesCount: number = 10000;

    const positionArray: number[] = new Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positionArray, 3),
    );

    // Materials

    const material: THREE.PointsMaterial = new THREE.PointsMaterial({
      transparent: true,
      size: 0.005,
    });

    const particlesMaterial: THREE.PointsMaterial = new THREE.PointsMaterial({
      transparent: true,
      size: 0.005,
      map: star,
    });

    // Mesh
    const sphere: THREE.Points = new THREE.Points(geometry, material);

    const particlesMesh: THREE.Points = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    scene.add(sphere, particlesMesh);

    // Lights

    const pointLight: THREE.PointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    /**
     * Sizes
     */
    const sizes: Sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100,
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color("#21282a"));

    // mouse
    document.addEventListener("mousemove", animateParticles);

    let mouseX = 0;
    let mouseY = 0;

    function animateParticles(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    /**
     * Animate
     */

    const clock: THREE.Clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime: number = clock.getElapsedTime();

      // Update objects
      sphere.rotation.y = 0.5 * elapsedTime;
      particlesMesh.rotation.y = -0.1 * elapsedTime;

      if (mouseX > 0) {
        particlesMesh.rotation.x = mouseY * (elapsedTime * 0.00008);
        particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
      }

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  });

  return (
    <div>
      <div class="container absolute z-10 flex min-h-screen w-full items-center justify-center text-white">
        <div class="content relative flex w-full items-start gap-20 pt-12">
          <div class="w-1/2 flex-auto flex-grow text-right">
            <h1 class="line-height-1 m-0 text-5xl leading-tight">
              Aleks Manov
            </h1>
            <h2 class="line-height-1 m-0 text-4xl leading-tight">
              Software Engineer - Full Stack Developer
            </h2>
          </div>
          <div class="w-2/5 flex-auto flex-grow text-xl leading-tight">
            <p class="line-height-1 m-0">
              Java, React, NextJS, JavaScript, and QWIK.
            </p>
            <section class="mt-4 grid grid-cols-1 gap-10 md:grid-cols-4">
              {["Qwik", "Bun", "Tailwind", "Three.js"].map((tech, index) => (
                <div
                  key={index}
                  class="flex transform flex-col items-center transition-transform hover:scale-105"
                >
                  <div class="z-50 flex h-16 w-16 items-center justify-center rounded-full bg-transparent p-4 shadow-lg">
                    {tech === "Qwik" && <QwikLogo />}
                    {tech === "Tailwind" && <TailwindLogo />}
                    {tech === "Bun" && <BunLogo />}
                    {tech === "Three.js" && <ThreeJsLogo />}
                  </div>
                  <p class="mt-2 text-base">{tech}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
      <canvas class="three-js-landing fixed left-0 top-0 outline-none"></canvas>
    </div>
  );
});
