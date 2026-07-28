"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }} id="experience">
      <div className="glow-6 absolute top-1/2 left-1/4 w-72 h-72 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: "var(--heading)" }}>Work experience</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={(i + 1) * 150}>
                <div className="glass-card rounded-3xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full p-8 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors text-left"
                  >
                    <div className="flex items-center space-x-6 pointer-events-none">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
                        <Image
                          src={exp.image}
                          alt={exp.company}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white">{exp.role}</h4>
                        <p className="text-sm text-white/50">
                          {exp.company} &bull; {exp.period} &bull; {exp.location}
                        </p>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-white/70 shrink-0 transition-transform duration-200 pointer-events-none ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-10 text-sm text-white/60">
                      <div className="border-t border-white/10 pt-8">
                        <p className="font-bold mb-4 uppercase text-[10px] text-white/40 tracking-widest">
                          Key Impact &amp; Responsibilities:
                        </p>
                        <ul className="list-disc ml-4 space-y-3">
                          {exp.responsibilities.map((resp, j) => (
                            <li key={j}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
