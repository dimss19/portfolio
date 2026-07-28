"use client";

import { useEffect, useRef, useState } from "react";

const ASCII_CHARS = "01@#$%&*+=-.:~";
const GRID_COLS = 120;
const GRID_ROWS = 25;

function generateGrid() {
  return Array.from({ length: GRID_ROWS }, () =>
    Array.from({ length: GRID_COLS }, () => Math.floor(Math.random() * ASCII_CHARS.length))
  );
}

function staticGrid() {
  return Array.from({ length: GRID_ROWS }, () =>
    Array.from({ length: GRID_COLS }, () => 0)
  );
}

export default function HeroAscii() {
  const [grid, setGrid] = useState(staticGrid);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    setGrid(generateGrid());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let lastTime = 0;
    const animate = (time: number) => {
      if (time - lastTime > 80) {
        setGrid((prev) =>
          prev.map((row, ry) =>
            row.map((_, rx) => {
              const nx = rx / GRID_COLS;
              const ny = ry / GRID_ROWS;
              const dx = nx - mouse.x;
              const dy = ny - mouse.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const influence = Math.max(0, 1 - dist * 2);
              const rand = Math.random();
              if (influence > 0.5 && rand > 0.6) {
                return Math.floor(rand * ASCII_CHARS.length);
              }
              return prev[ry][rx];
            })
          )
        );
        lastTime = time;
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [mouse, mounted]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full overflow-hidden bg-background flex items-center justify-center select-none"
    >
      <pre className="text-[7px] sm:text-[9px] md:text-[11px] leading-tight text-white/20 font-mono whitespace-pre pointer-events-none">
        {grid.map((row, ry) => (
          <div key={ry}>
            {row.map((charIdx, rx) => {
              const nx = rx / GRID_COLS;
              const ny = ry / GRID_ROWS;
              const dx = nx - mouse.x;
              const dy = ny - mouse.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const brightness = Math.max(0.08, 1 - dist * 1.5);
              return (
                <span key={rx} style={{ opacity: brightness }}>
                  {ASCII_CHARS[charIdx]}
                </span>
              );
            })}
          </div>
        ))}
      </pre>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </div>
  );
}
