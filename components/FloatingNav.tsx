"use client";

import { navLinks } from "@/data/portfolio";
import { useTheme } from "./ThemeProvider";

export default function FloatingNav() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
      <div className="glass-nav px-6 py-3 rounded-full flex items-center space-x-6 shadow-2xl">
        {navLinks.map((link) => (
          <a
            key={link.href}
            className="transition-all duration-500 hover:opacity-100 hover:-translate-y-1 hover:scale-110"
            style={{ color: "var(--nav-icon)" }}
            href={link.href}
            title={link.title}
          >
            {link.icon === "home" && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            )}
            {link.icon === "experience" && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            )}
            {link.icon === "projects" && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            )}
            {link.icon === "contact" && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            )}
          </a>
        ))}

        <div className="w-px h-5" style={{ backgroundColor: "var(--nav-divider)" }} />

        <button
          type="button"
          onClick={toggle}
          className="transition-all duration-500 hover:opacity-100 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          style={{ color: "var(--nav-icon)" }}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
