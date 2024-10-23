"use client"

import { cn } from "@/utils/tailwind";
import Image from "next/image";
import { ComponentProps, useEffect, useRef } from "react"

type RadialStarsProps = ComponentProps<"div">;

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: string;
};

export const RadialStars = ({ className, ...props }: RadialStarsProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const colors = ['#ffff', '#1A4FFF', '#8fa9ff'];

  const createParticle = (canvasWidth: number, canvasHeight: number): Particle => ({
    x: Math.random() * canvasWidth, // Posição X aleatória
    y: Math.random() * (canvasHeight * 0.8), // Posição Y aleatória na parte superior do canvas (com deslocamento de 20 pixels)
    radius: Math.random() * 0.5 + 1, // Tamanho aleatório (entre 2 e 4)
    speed: Math.random() * 0.25 + 0.15, // Velocidade mais lenta (entre 0.1 e 0.3)
    color: colors[Math.floor(Math.random() * colors.length)],
  });

  const drawParticles = (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    particlesRef.current.forEach((particle) => {
      particle.y -= particle.speed;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    });

    particlesRef.current = particlesRef.current.filter((p) => p.y + p.radius > 0);
  };

  const animate = (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    drawParticles(ctx, canvasWidth, canvasHeight);

    if (particlesRef.current.length < 50) {
      particlesRef.current.push(createParticle(canvasWidth, canvasHeight));
    }

    requestAnimationFrame(() => animate(ctx, canvasWidth, canvasHeight));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    animate(ctx, canvas.width, canvas.height);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div {...props} className={cn("w-[735px] h-[275px]", className)}>
      <Image
        src="/radial.svg"
        width={735}
        height={275}
        role="presentation"
        alt=""
        className="object-cover w-full h-full"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-full z-[2]"
      />
    </div>
  )
}