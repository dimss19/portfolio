import Image from "next/image";
import { organizations } from "@/data/portfolio";

export default function Organization() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white text-center">Organization</h2>
        <div className="space-y-6">
          {organizations.map((org) => (
            <div key={org.name} className="glass-card rounded-3xl p-8 flex justify-between items-center hover:bg-white/5 transition-colors">
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
              <div className="bg-white/5 p-2 rounded-full">
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
