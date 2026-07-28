"use client";

export default function BackToTop() {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <button
      type="button"
      className="fixed bottom-8 right-8 glass-card text-white p-4 rounded-2xl hover:scale-110 transition-all z-40 group"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </button>
  );
}
