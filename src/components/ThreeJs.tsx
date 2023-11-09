import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { QwikLogo, BunLogo, TailwindLogo, ThreeJsLogo } from "./TechLogos";
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

    const mousePos: THREE.Vector2 = new THREE.Vector2();

    const targetRotation: THREE.Vector2 = new THREE.Vector2();

    // Quaternion for the current rotation
    const currentRotation: THREE.Quaternion = new THREE.Quaternion();

    function animateParticles(event: MouseEvent) {
      // update the mouse pos
      mouseX = event.clientX;
      mouseY = event.clientY;

      // Normalize mouse position to -1 to 1 range
      mousePos.x = (mouseX / window.innerWidth) * 2 - 1;
      mousePos.y = -(mouseY / window.innerHeight) * 2 + 1;

      // Update target rotation based on mouse position
      targetRotation.x = mousePos.y * Math.PI * 0.1;
      targetRotation.y = mousePos.x * Math.PI * 0.1;
    }

    /**
     * Animate
     */

    const clock: THREE.Clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime: number = clock.getElapsedTime();

      // Update objects
      sphere.rotation.y = 0.5 * elapsedTime;

      // Update particlesMesh rotation
      // Convert target rotation to Quaternion
      const targetQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(targetRotation.x, targetRotation.y, 0, "YXZ"),
      );

      // Slerp from current rotation to target rotation
      currentRotation.slerp(targetQuaternion, 0.07);

      // Update particlesMesh rotation
      particlesMesh.setRotationFromQuaternion(currentRotation);

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  });

  return (
    <div>
      <div class="container absolute z-10 flex min-h-screen w-full flex-col items-start justify-between p-4 text-white md:p-12">
        <div>
          <h1 class="m-0 text-3xl leading-tight md:text-5xl">Aleks Manov</h1>
          <h3 class="m-0 text-2xl leading-tight md:text-4xl">
            Software Engineer - Full Stack Developer
          </h3>
        </div>
        <section class="grid grid-cols-1 gap-2 sm:grid-cols-4 md:grid-cols-1 md:gap-4 lg:grid-cols-4">
          {["Qwik", "Bun", "Tailwind", "Three.js"].map((tech, index) => (
            <div
              key={index}
              class="flex transform flex-col items-center transition-transform hover:scale-105"
            >
              <div class="z-50">
                {tech === "Qwik" && <QwikLogo />}
                {tech === "Tailwind" && <TailwindLogo />}
                {tech === "Bun" && <BunLogo />}
                {tech === "Three.js" && <ThreeJsLogo />}
              </div>
              <p class="mt-2 text-sm md:text-base">{tech}</p>
            </div>
          ))}
        </section>
      </div>
      <canvas class="three-js-landing fixed left-0 top-0 outline-none"></canvas>
    </div>
  );
});
