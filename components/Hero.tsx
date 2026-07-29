import Image from "next/image";
import { profile } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <main className="pt-16 pb-32 relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }} id="top">
      <div className="glow-1 absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" />
      <div className="glow-2 absolute top-20 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none" />
      <div className="glow-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="relative rounded-[2rem] overflow-hidden h-[280px] sm:h-[360px] lg:h-[480px] mb-[-60px] sm:mb-[-80px] lg:mb-[-120px]">
            <Image
              src="/assets/hero-bg.jpg"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-center">
                Build.<br className="md:hidden" />Connect.<br className="md:hidden" />Innovate.
              </h1>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative z-30 max-w-5xl mx-auto glass-card-glow rounded-[2rem] p-5 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center md:items-start space-y-6 sm:space-y-8 md:space-y-0 md:space-x-10">
            <div className="w-36 h-36 rounded-3xl overflow-hidden flex-shrink-0" style={{ backgroundColor: "var(--card-tag-bg)", border: "1px solid var(--card-tag-border)" }}>
              <Image
                src={profile.photo}
                alt={profile.name}
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
                quality={95}
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: "var(--card-text)" }}>{profile.name}</h2>
              <p className="font-medium text-xl mt-1" style={{ color: "var(--card-text-muted)" }}>{profile.title}</p>
              <p className="mt-3 max-w-xl" style={{ color: "var(--card-text-muted)" }}>{profile.description}</p>
              <p className="mt-3 flex items-center justify-center md:justify-start text-sm" style={{ color: "var(--card-text-muted)" }}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd" />
                </svg>
                {profile.location}
              </p>
            </div>
            <div className="flex gap-x-4 sm:gap-x-6 lg:gap-x-10 text-center flex-wrap">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: "var(--card-text-dim)" }}>{stat.label}</p>
                  <p className="text-3xl font-bold" style={{ color: "var(--card-text)" }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
