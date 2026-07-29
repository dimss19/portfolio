import { certifications } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import ImageModal from "./ImageModal";

export default function Certifications() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }} id="certifications">
      <div className="glow-2 absolute top-0 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-16 text-center" style={{ color: "var(--heading)" }}>Certifications</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={(i + 1) * 150}>
              <div className="glass-card rounded-[2rem] overflow-hidden h-full flex flex-col group transition-all duration-300">
                <div className="w-full aspect-[4/3] overflow-hidden p-3 pb-0">
                  <div className="w-full h-full rounded-t-2xl overflow-hidden relative">
                    <ImageModal src={cert.image} alt={cert.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end justify-center pb-4">
                      <span className="text-white text-xs font-medium flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                        View
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-4">
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
