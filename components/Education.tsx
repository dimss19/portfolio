import { educations } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="py-24 bg-background" id="education">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white text-center">Education</h2>
        <div className="space-y-6">
          {educations.map((edu) => (
            <div key={edu.institution} className="glass-card rounded-3xl p-8 flex justify-between items-center hover:bg-white/5 transition-colors">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-2xl">
                  &#x1F393;
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">{edu.institution}</h4>
                  <p className="text-sm text-white/50">
                    {edu.program} &bull; {edu.period}
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
