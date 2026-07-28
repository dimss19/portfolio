import Image from "next/image";
import { skills } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section className="py-24 bg-background border-t border-white/5" id="skills">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Skills &amp; Focus Areas
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-20 text-lg">
            Core competencies built through coursework, internship, and personal projects.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.category} delay={(i + 1) * 150}>
              <div className="p-8 glass-card rounded-[2rem] text-left h-full">
                <div className="mb-8 h-56 rounded-2xl overflow-hidden">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest badge-monochrome">
                  {skill.category}
                </span>
                <h3 className="text-2xl font-bold mt-6 mb-3 text-white">{skill.title}</h3>
                <p className="text-white/50 text-sm mb-8 leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 border border-white/10 rounded-lg text-[10px] font-medium text-white/70 bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
