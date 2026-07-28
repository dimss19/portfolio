import Image from "next/image";
import { testimonials } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-24 bg-background" id="testimonials" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`scroll-fade-up ${isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-16 text-white text-center">What they say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-card p-10 rounded-[2.5rem] relative flex flex-col scroll-fade-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="text-3xl text-white/10 absolute top-8 left-8">&quot;</div>
              <p className="text-lg italic leading-relaxed text-white/80 mb-10 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center space-x-4 mt-auto">
                <div className="w-12 h-12 rounded-2xl overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
