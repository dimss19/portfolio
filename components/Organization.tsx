import Image from "next/image";
import { organizations } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Organization() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: "var(--heading)" }}>Organization</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {organizations.map((org, i) => (
            <ScrollReveal key={org.name} delay={(i + 1) * 150}>
              <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-colors">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                    <Image
                      src={org.image}
                      alt={org.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">{org.name}</h4>
                    <p className="text-sm text-white/50">
                      {org.role} &bull; {org.period}
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
