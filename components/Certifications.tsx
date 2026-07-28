import Image from "next/image";
import { certifications } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  return (
    <section className="py-24 bg-background" id="certifications">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-16 text-white text-center">Certifications</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={(i + 1) * 150}>
              <div className="glass-card rounded-[2rem] overflow-hidden h-full">
                <div className="w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={600}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 border-t border-white/10">
                  <p className="text-xs font-bold truncate text-white/80 uppercase tracking-widest">
                    {cert.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
