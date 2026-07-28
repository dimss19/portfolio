import { certifications } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import ImageModal from "./ImageModal";

export default function Certifications() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }} id="certifications">
      <div className="glow-2 absolute top-0 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-[90rem] mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: "var(--heading)" }}>Certifications</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={(i + 1) * 150}>
              <div className="glass-card rounded-[2rem] overflow-hidden h-full flex flex-col">
                <div className="w-full aspect-[4/3] overflow-hidden p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <ImageModal src={cert.image} alt={cert.title} />
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed" style={{ color: "var(--card-text-muted)" }}>
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
