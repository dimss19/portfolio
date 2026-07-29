import Image from "next/image";
import { educations } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }} id="education">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-16 text-center" style={{ color: "var(--heading)" }}>Education</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {educations.map((edu, i) => (
            <ScrollReveal key={edu.institution} delay={(i + 1) * 150}>
              <div className="glass-card rounded-3xl p-5 sm:p-8 transition-colors">
                <div className="flex items-center space-x-3 sm:space-x-6 min-w-0">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0" style={{ backgroundColor: "var(--card-tag-bg)", border: "1px solid var(--card-tag-border)" }}>
                    <Image
                      src={edu.image}
                      alt={edu.institution}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl" style={{ color: "var(--card-text)" }}>{edu.institution}</h4>
                    <p className="text-sm" style={{ color: "var(--card-text-muted)" }}>
                      {edu.program} &bull; {edu.period}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
