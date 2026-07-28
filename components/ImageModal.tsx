"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  alt: string;
}

export default function ImageModal({ src, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      >
        <Image
          src={src}
          alt={alt}
          width={600}
          height={375}
          className="w-full h-full object-cover"
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={750}
              className="w-full h-auto rounded-2xl"
            />
            <p className="text-white text-center mt-4 text-sm">{alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
