"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const colors = ["primary", "secondary", "accent", "success"];

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const mouseTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);

      // Clear previous timeout
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }

      // Set timeout to stop particle generation
      mouseTimeoutRef.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMouseMoving) return;

    // Create new particles when mouse is moving
    const createParticle = (): Particle => {
      const life = 120 + Math.random() * 60; // 2-3 seconds at 60fps
      return {
        id: Math.random(),
        x: mousePosition.x + (Math.random() - 0.5) * 30,
        y: mousePosition.y + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 0.5, // Much slower horizontal movement
        vy: (Math.random() - 0.5) * 0.5 - 0.2, // Slower, slight upward bias
        size: 1 + Math.random() * 3,
        opacity: 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        life,
        maxLife: life,
      };
    };

    // Add new particles
    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticles = [...prev];

        // Add new particles (limit to prevent performance issues)
        if (newParticles.length < 30) {
          for (let i = 0; i < 1; i++) {
            newParticles.push(createParticle());
          }
        }

        return newParticles;
      });
    }, 150); // Less frequent particle generation

    return () => clearInterval(interval);
  }, [isMouseMoving, mousePosition]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      setParticles((prevParticles) => {
        const updatedParticles = prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 1,
            opacity: (particle.life / particle.maxLife) * 0.8,
          }))
          .filter((particle) => particle.life > 0);

        // Draw particles
        updatedParticles.forEach((particle) => {
          ctx.save();
          ctx.globalAlpha = particle.opacity;

          // Set color based on particle color
          let color;
          switch (particle.color) {
            case "primary":
              color = "136, 192, 208"; // var(--primary)
              break;
            case "secondary":
              color = "143, 188, 187"; // var(--secondary)
              break;
            case "accent":
              color = "235, 203, 139"; // var(--accent)
              break;
            case "success":
              color = "163, 190, 140"; // var(--success)
              break;
            default:
              color = "136, 192, 208";
          }

          // Create gradient for particle
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size
          );
          gradient.addColorStop(0, `rgba(${color}, ${particle.opacity})`);
          gradient.addColorStop(1, `rgba(${color}, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        });

        return updatedParticles;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {[...Array(6)].map((_, i) => {
          // Use deterministic values based on index to avoid SSR mismatch
          const startX =
            (i * 200 + 100) %
            (typeof window !== "undefined" ? window.innerWidth : 1000);
          const endX =
            ((i + 1) * 250 + 150) %
            (typeof window !== "undefined" ? window.innerWidth : 1000);
          const startY =
            (i * 150 + 80) %
            (typeof window !== "undefined" ? window.innerHeight : 1000);
          const endY =
            ((i + 1) * 180 + 120) %
            (typeof window !== "undefined" ? window.innerHeight : 1000);

          return (
            <motion.div
              key={i}
              className={`absolute w-4 h-4 ${
                i % 4 === 0
                  ? "bg-primary/20"
                  : i % 4 === 1
                  ? "bg-secondary/20"
                  : i % 4 === 2
                  ? "bg-accent/20"
                  : "bg-success/20"
              } ${
                i % 3 === 0
                  ? "rounded-full"
                  : i % 3 === 1
                  ? "rounded-lg rotate-45"
                  : "rounded-sm"
              } blur-sm`}
              animate={{
                x: [startX, endX],
                y: [startY, endY],
                rotate: [0, 180],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 40 + i * 5, // Deterministic duration
                repeat: Infinity,
                ease: "linear",
                delay: i * 3,
              }}
              style={{
                left: i * 15 + 10 + "%", // Deterministic positioning
                top: i * 12 + 15 + "%",
              }}
            />
          );
        })}
      </div>

      {/* Interactive cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-20 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      >
        <motion.div
          className="w-5 h-5 border-2 border-white rounded-full"
          animate={{
            scale: isMouseMoving ? 1.5 : 1,
            opacity: isMouseMoving ? 0.8 : 0.3,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
