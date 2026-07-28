import { certifications } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import ImageModal from "./ImageModal";

export default function Certifications() {
  return (
    <section className="py-24 bg-background" id="certifications">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-16 text-white text-center">Certifications</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={(i + 1) * 150}>
              <div className="glass-card rounded-[2rem] overflow-hidden h-full">
                <div className="w-full aspect-[16/10] overflow-hidden">
                  <ImageModal src={cert.image} alt={cert.title} />
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
