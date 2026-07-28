"use client";

import { useEffect, useRef, useCallback, useState } from "react";

const ASCII_CHARS = "01@#$%&*+=-.:~";
const GRID_COLS = 80;
const GRID_ROWS = 30;
const CELL_W = 10;
const CELL_H = 14;

function generateGrid() {
  return Array.from({ length: GRID_ROWS }, () =>
    Array.from({ length: GRID_COLS }, () => Math.floor(Math.random() * ASCII_CHARS.length))
  );
}

export default function HeroAscii() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<number[][]>(generateGrid());
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const grid = gridRef.current;
    const mouse = mouseRef.current;
    const now = Date.now();

    for (let ry = 0; ry < GRID_ROWS; ry++) {
      for (let rx = 0; rx < GRID_COLS; rx++) {
        const nx = rx / GRID_COLS;
        const ny = ry / GRID_ROWS;
        const dx = nx - mouse.x;
        const dy = ny - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const brightness = Math.max(0.06, 1 - dist * 1.8);

        const charIdx = grid[ry][rx];
        ctx.fillStyle = `rgba(255,255,255,${brightness * 0.25})`;
        ctx.fillText(ASCII_CHARS[charIdx], rx * CELL_W, ry * CELL_H);
      }
    }

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    setMounted(true);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      const mouse = mouseRef.current;
      const grid = gridRef.current;
      for (let ry = 0; ry < GRID_ROWS; ry++) {
        for (let rx = 0; rx < GRID_COLS; rx++) {
          const nx = rx / GRID_COLS;
          const ny = ry / GRID_ROWS;
          const dx = nx - mouse.x;
          const dy = ny - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 0.3 && Math.random() > 0.7) {
            grid[ry][rx] = Math.floor(Math.random() * ASCII_CHARS.length);
          }
        }
      }
    }, 100);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mounted, draw]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center select-none"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ imageRendering: "pixelated" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </div>
  );
}
