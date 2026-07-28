import Image from "next/image";
import { certifications } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-24 bg-background" id="certifications" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`scroll-fade-up ${isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-16 text-white text-center">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`glass-card rounded-[2rem] overflow-hidden scroll-fade-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
