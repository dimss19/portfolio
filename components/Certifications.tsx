import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section className="py-24 bg-background" id="certifications">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className="glass-card rounded-[2rem] overflow-hidden">
              <div className="w-full aspect-[16/10] img-placeholder border-0 rounded-0">Image</div>
              <div className="p-6 flex items-center space-x-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  {cert.icon}
                </div>
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
