import { profile } from "@/data/portfolio";

export default function ContactCTA() {
  return (
    <section className="py-40 bg-background text-center border-t border-white/5" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-xl text-white/40 mb-4 font-medium">Have a project in mind?</p>
        <h2 className="text-6xl md:text-8xl font-bold mb-12 text-white tracking-tighter">
          Let&apos;s build something great.
        </h2>
        <a
          className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl inline-block"
          href="mailto:adimusricky@gmail.com"
        >
          Get in touch
        </a>
        <div className="mt-32 pt-20 border-t border-white/5">
          <p className="text-xs text-white/20 mb-10 uppercase tracking-[0.4em]">Malang, Indonesia (WIB)</p>
          <div className="flex justify-center flex-wrap gap-8 mb-16">
            {profile.social.map((link) => (
              <a
                key={link.platform}
                className="text-white/40 hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform}
              </a>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium">
            <p>&copy; 2026 Adimus Ricky Faisal Sahri. All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
