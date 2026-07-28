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
                    className="w-full p-8 flex justify-between items-center cursor-pointer transition-colors text-left"
                    style={{ color: "var(--card-text)" }}
                  >
                    <div className="flex items-center space-x-6 pointer-events-none">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0" style={{ backgroundColor: "var(--card-tag-bg)", border: "1px solid var(--card-tag-border)" }}>
                        <Image
                          src={exp.image}
                          alt={exp.company}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl">{exp.role}</h4>
                        <p className="text-sm" style={{ color: "var(--card-text-muted)" }}>
                          {exp.company} &bull; {exp.period} &bull; {exp.location}
                        </p>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 pointer-events-none ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: "var(--card-text-muted)" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-10 text-sm" style={{ color: "var(--card-text-muted)" }}>
                      <div className="border-t pt-8" style={{ borderColor: "var(--card-tag-border)" }}>
                        <p className="font-bold mb-4 uppercase text-[10px] tracking-widest" style={{ color: "var(--card-text-dim)" }}>
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
