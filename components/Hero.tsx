import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <main className="pt-16 pb-32 bg-background" id="top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden h-[480px] mb-[-120px] hero-placeholder">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
          <span className="text-2xl opacity-20 relative z-10">Hero Background</span>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-center">
              Build.<br className="md:hidden" />Connect.<br className="md:hidden" />Innovate.
            </h1>
          </div>
        </div>

        <div className="relative z-30 max-w-5xl mx-auto glass-card rounded-[2rem] p-10 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
          <div className="w-36 h-36 rounded-3xl overflow-hidden flex-shrink-0 bg-surface-container border border-white/20 img-placeholder">
            <span>Photo</span>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-4xl font-bold text-white tracking-tight">{profile.name}</h2>
            <p className="text-white/80 font-medium text-xl mt-1">{profile.title}</p>
            <p className="text-white/50 mt-3 max-w-xl">{profile.description}</p>
            <p className="text-white/50 mt-3 flex items-center justify-center md:justify-start text-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd" />
              </svg>
              {profile.location}
            </p>
          </div>
          <div className="flex gap-x-10 text-center">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
