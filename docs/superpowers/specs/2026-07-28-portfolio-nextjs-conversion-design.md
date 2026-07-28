# Portfolio HTML → Next.js Conversion Design

## Goal

Convert `template.html` (static HTML with Tailwind CDN) into a modern Next.js App Router project. Visual output must be identical to the original HTML.

## Decisions

- **Tailwind config**: Use CSS `@theme inline` (v4 style), NOT `tailwind.config.ts`
- **Animations**: CSS transitions only, NO Framer Motion
- **Framer Motion**: Remove from `package.json`
- **Content**: Replace all existing `page.tsx` content with `template.html` content
- **Fonts**: Geist + JetBrains Mono via `next/font/google`

## File Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (fonts, html/body)
│   ├── page.tsx            # Main page (composes all components)
│   └── globals.css         # @theme tokens + glassmorphism utilities
├── components/
│   ├── FloatingNav.tsx     # Bottom-center nav bar
│   ├── Hero.tsx            # Hero banner + profile card
│   ├── Skills.tsx          # Skills & Focus Areas (3 cards)
│   ├── Projects.tsx        # Showcase (2 project cards)
│   ├── WorkExperience.tsx  # Accordion experience section (use client)
│   ├── Education.tsx       # Education entries
│   ├── Organization.tsx    # Organization entry
│   ├── Certifications.tsx  # Certification cards (4 items)
│   ├── Testimonials.tsx    # Testimonial cards (3 placeholders)
│   ├── ContactCTA.tsx      # Contact section + footer
│   └── BackToTop.tsx       # Scroll-to-top button (use client)
├── data/
│   └── portfolio.ts        # All typed content data
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-07-28-portfolio-nextjs-conversion-design.md
└── public/                 # Static assets (empty for now)
```

## Data Layer (`data/portfolio.ts`)

All content from template.html extracted into typed interfaces and exported objects.

### Interfaces

```typescript
export interface Profile {
  name: string;
  title: string;
  description: string;
  location: string;
  stats: { label: string; value: string }[];
  social: { platform: string; url: string }[];
}

export interface Skill {
  category: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  likes: number;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  program: string;
  period: string;
}

export interface Organization {
  name: string;
  role: string;
  period: string;
}

export interface Certification {
  title: string;
  icon: string; // emoji
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface NavLink {
  href: string;
  title: string;
  icon: "home" | "experience" | "projects" | "contact";
}

export const navLinks: NavLink[] = [
  { href: "#top", title: "Home", icon: "home" },
  { href: "#experience", title: "Experience", icon: "experience" },
  { href: "#projects", title: "Projects", icon: "projects" },
  { href: "#contact", title: "Contact", icon: "contact" },
];

export const profile: Profile = {
  name: "Adimus Ricky Faisal Sahri",
  title: "Web Developer & IoT Enthusiast",
  description: "Mahasiswa Teknologi Informasi Universitas Brawijaya dengan fokus pada Web Development dan Internet of Things (IoT).",
  location: "Malang, Jawa Timur, Indonesia",
  stats: [
    { label: "Projects", value: "2+" },
    { label: "Certifications", value: "3" },
    { label: "Internships", value: "1" },
    { label: "Focus Areas", value: "2" },
  ],
  social: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/adimusricky" },
    { platform: "GitHub", url: "https://github.com/dimss19" },
    { platform: "Email", url: "mailto:adimusricky@gmail.com" },
  ],
};

export const skills: Skill[] = [
  {
    category: "Web Development",
    title: "Junior Web Developer",
    description: "Building web applications with modern stacks, from database design to responsive UI.",
    tags: ["Laravel", "React", "PHP", "MySQL"],
  },
  {
    category: "IoT",
    title: "IoT Development",
    description: "Designing connected devices and monitoring systems using microcontrollers and sensors.",
    tags: ["ESP32", "MQTT", "Sensor Integration"],
  },
  {
    category: "Infrastructure",
    title: "Network & Systems",
    description: "Configuring and troubleshooting networks, servers, and hardware from a TKJ background.",
    tags: ["Mikrotik", "LAN/WAN", "Cloud Basics"],
  },
];

export const projects: Project[] = [
  {
    title: "SADAM ART",
    description: "Furniture e-commerce website built as part of coursework, covering product catalog, cart, and order flow.",
    tags: ["Laravel", "MySQL"],
    likes: 0,
    url: "https://github.com/dimss19",
  },
  {
    title: "Smart Posture",
    description: "IoT-based body posture monitoring system using MQTT to stream sensor data in real time.",
    tags: ["ESP32", "MQTT"],
    likes: 0,
    url: "https://github.com/dimss19",
  },
];

export const experiences: Experience[] = [
  {
    role: "Internship Technician",
    company: "Serbu Computer",
    period: "Jan 2023 - Jun 2023",
    location: "Malang",
    responsibilities: [
      "Performed light laptop servicing including hardware repair and component replacement such as RAM, hard drive, and battery.",
      "Handled software issues including operating system installation and driver updates.",
      "Provided technical support to customers on laptop operation and troubleshooting.",
    ],
  },
];

export const educations: Education[] = [
  {
    institution: "Universitas Brawijaya",
    program: "D3 Teknologi Informasi",
    period: "2024 - Present",
  },
  {
    institution: "SMKN 6 Malang",
    program: "Teknik Komputer dan Jaringan",
    period: "2021 - 2024",
  },
];

export const organizations: Organization[] = [
  {
    name: "PROVOKS (Programmer Vokasi)",
    role: "IoT Division Mentor",
    period: "2025 - Present",
  },
];

export const certifications: Certification[] = [
  { title: "Microsoft Office Desktop Application", icon: "💻" },
  { title: "Content Creator (BNSP)", icon: "🎬" },
  { title: "Dasar Visualisasi Data (Dicoding)", icon: "📊" },
  { title: "Dasar AI (Dicoding)", icon: "🤖" },
];

export const testimonials: Testimonial[] = [
  { quote: "Testimonials coming soon.", name: "Name Placeholder", title: "Title / Company" },
  { quote: "Testimonials coming soon.", name: "Name Placeholder", title: "Title / Company" },
  { quote: "Testimonials coming soon.", name: "Name Placeholder", title: "Title / Company" },
];
```

## Components

### Client/Server Split

| Component | Type | Reason |
|---|---|---|
| FloatingNav | Server | Static anchor links |
| Hero | Server | Static content |
| Skills | Server | Static content |
| Projects | Server | Static content |
| WorkExperience | **Client** | useState accordion |
| Education | Server | Static content |
| Organization | Server | Static content |
| Certifications | Server | Static content |
| Testimonials | Server | Static content |
| ContactCTA | Server | Static content |
| BackToTop | **Client** | onClick handler |

### Component Pattern

Each component:
1. Imports data from `@/data/portfolio`
2. Accepts no props (data is imported directly)
3. Returns a `<section>` with appropriate id
4. Uses className (not class)
5. All SVG attributes converted to JSX camelCase

### WorkExperience Accordion

```typescript
"use client";
import { useState } from "react";
import { experiences } from "@/data/portfolio";
import { ChevronUp } from "./icons"; // inline SVG component

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white text-center">Work experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="glass-card rounded-3xl overflow-hidden">
              <button
                className="w-full p-8 flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => toggle(i)}
              >
                {/* ... header content ... */}
                <div className={`bg-white/10 p-2 rounded-full transition-transform ${openIndex === i ? "rotate-180" : ""}`}>
                  <ChevronUp />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-10 text-sm text-white/60">
                  {/* ... responsibilities list ... */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### BackToTop

```typescript
"use client";

export default function BackToTop() {
  return (
    <button
      className="fixed bottom-32 right-8 glass-card text-white p-4 rounded-2xl hover:scale-110 transition-all z-40 group"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {/* ... SVG icon ... */}
    </button>
  );
}
```

### Icons

Inline SVGs from template.html converted to JSX. No shared icon component — each SVG is small and unique. Conversion rules:
- `viewbox` → `viewBox`
- `stroke-linecap` → `strokeLinecap`
- `stroke-linejoin` → `strokeLinejoin`
- `stroke-width` → `strokeWidth`
- `fill-rule` → `fillRule`
- `clip-rule` → `clipRule`

## CSS & Theme

### `globals.css`

```css
@import "tailwindcss";

@theme inline {
  --font-sans: "Geist", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --color-background: #131313;
  --color-surface: #131313;
  --color-primary: #ffffff;
  --color-on-background: #e2e2e2;
  --color-on-surface: #e2e2e2;
  --color-surface-container: #1f1f1f;
  --color-surface-container-high: #2a2a2a;
  --color-outline: #8e9192;
  --color-outline-variant: #444748;
  /* ... all 60+ tokens from template.html tailwind.config ... */
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}

body {
  font-family: "Geist", sans-serif;
  background-color: #131313;
  color: #e2e2e2;
}

.glass-card { /* ... */ }
.glass-nav { /* ... */ }
.img-placeholder { /* ... */ }
.hero-placeholder { /* ... */ }
.badge-monochrome { /* ... */ }
```

### `layout.tsx`

```typescript
import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Adimus Ricky Faisal Sahri | Web Developer & IoT Enthusiast",
  description: "Portfolio website showcasing web development and IoT projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrains.variable} antialiased`}>
      <body className="bg-background text-on-background selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
```

## Deletions

1. Delete `app/page.tsx.bak`
2. Remove `framer-motion` from `package.json` dependencies
3. Run `npm install` to update lockfile

## Verification

1. `npm run dev` — site loads without errors
2. Visual comparison with `template.html` — identical layout, colors, spacing
3. `npm run lint` — no ESLint errors
4. All anchor links work (smooth scroll)
5. WorkExperience accordion toggles correctly
6. BackToTop button scrolls to top
7. Responsive layout works (mobile/tablet/desktop)

## Scope

- 11 components extracted from template.html
- ~60+ color tokens migrated to @theme
- All content preserved exactly as-is
- No new features beyond what template.html provides
- No Framer Motion animations added
