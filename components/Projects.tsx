import Image from "next/image";
import { projects } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }} id="projects">
      <div className="glow-4 absolute top-1/3 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none" />
      <div className="glow-5 absolute bottom-1/4 left-0 w-72 h-72 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "var(--heading)" }}>
                Showcase of<br />my best works
              </h2>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={(i + 1) * 150}>
              <div className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col group transition-all duration-500 h-full">
                <div className="w-full h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-8 flex-grow">
                  <h3 className="font-bold text-xl mb-3" style={{ color: "var(--card-text)" }}>{project.title}</h3>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--card-text-muted)" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-3 py-1 rounded-full font-bold" style={{ backgroundColor: "var(--card-tag-bg)", border: "1px solid var(--card-tag-border)", color: "var(--card-tag-text)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 sm:p-6 border-t flex justify-between items-center text-xs" style={{ borderColor: "var(--card-tag-border)", color: "var(--card-text-dim)" }}>
                  <div className="flex items-center space-x-2">
                    <span>&#9825; {project.likes}</span>
                  </div>
                  <a
                    className="transition-colors flex items-center font-bold uppercase tracking-widest text-[10px]"
                    style={{ color: "var(--card-text-muted)" }}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Case
                    <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={300}>
          <div className="mt-16 text-center">
            <a
              className="px-10 py-4 glass-card rounded-full text-sm font-bold transition-all tracking-widest uppercase inline-block"
              style={{ color: "var(--card-text)" }}
              href="https://github.com/dimss19"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all projects
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
