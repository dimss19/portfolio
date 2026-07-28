# Portfolio HTML → Next.js Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert `template.html` (static HTML with Tailwind CDN) into a Next.js App Router project with identical visual output.

**Architecture:** Extract content into typed data layer, create 11 section components (2 client, 9 server), migrate Tailwind CDN tokens to CSS `@theme inline`, compose in `page.tsx`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`), Geist + JetBrains Mono fonts.

## Global Constraints

- Tailwind CSS v4 with `@tailwindcss/postcss` plugin — NO `tailwind.config.ts`
- CSS `@theme inline` for all design tokens in `globals.css`
- Geist + JetBrains Mono via `next/font/google`
- CSS transitions only — NO Framer Motion
- All SVG attributes must use JSX camelCase (`viewBox`, `strokeLinecap`, etc.)
- Visual output must be identical to `template.html`
- Node.js 20.9+ required

---

## File Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # MODIFY - fonts, metadata, html/body
│   ├── page.tsx            # REWRITE - compose all components
│   └── globals.css         # REWRITE - @theme tokens + utilities
├── components/
│   ├── FloatingNav.tsx     # CREATE
│   ├── Hero.tsx            # CREATE
│   ├── Skills.tsx          # CREATE
│   ├── Projects.tsx        # CREATE
│   ├── WorkExperience.tsx  # CREATE (use client)
│   ├── Education.tsx       # CREATE
│   ├── Organization.tsx    # CREATE
│   ├── Certifications.tsx  # CREATE
│   ├── Testimonials.tsx    # CREATE
│   ├── ContactCTA.tsx      # CREATE
│   └── BackToTop.tsx       # CREATE (use client)
├── data/
│   └── portfolio.ts        # CREATE - all typed content
├── AGENTS.md               # UPDATE - reflect new architecture
└── package.json            # MODIFY - remove framer-motion
```

---

### Task 1: Project Cleanup

**Files:**
- Delete: `app/page.tsx.bak`
- Modify: `package.json`

**Interfaces:**
- Produces: clean project state for subsequent tasks

- [ ] **Step 1: Delete backup file**

```bash
rm app/page.tsx.bak
```

- [ ] **Step 2: Remove framer-motion from package.json**

Open `package.json` and remove the `"framer-motion"` line from `dependencies`:

```json
"dependencies": {
  "next": "16.2.12",
  "react": "19.2.4",
  "react-dom": "19.2.4"
}
```

- [ ] **Step 3: Install dependencies to update lockfile**

```bash
npm install
```

- [ ] **Step 4: Verify dev server starts**

```bash
npm run dev
```
Expected: Server starts on localhost:3000 (page will be broken, that's fine)

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove framer-motion and backup file"
```

---

### Task 2: Data Layer

**Files:**
- Create: `data/portfolio.ts`

**Interfaces:**
- Produces: `profile`, `navLinks`, `skills`, `projects`, `experiences`, `educations`, `organizations`, `certifications`, `testimonials`

- [ ] **Step 1: Create data directory**

```bash
mkdir data
```

- [ ] **Step 2: Create `data/portfolio.ts`**

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
  icon: string;
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
  { title: "Microsoft Office Desktop Application", icon: "\u{1F4BB}" },
  { title: "Content Creator (BNSP)", icon: "\u{1F3AC}" },
  { title: "Dasar Visualisasi Data (Dicoding)", icon: "\u{1F4CA}" },
  { title: "Dasar AI (Dicoding)", icon: "\u{1F916}" },
];

export const testimonials: Testimonial[] = [
  { quote: "Testimonials coming soon.", name: "Name Placeholder", title: "Title / Company" },
  { quote: "Testimonials coming soon.", name: "Name Placeholder", title: "Title / Company" },
  { quote: "Testimonials coming soon.", name: "Name Placeholder", title: "Title / Company" },
];
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add data/portfolio.ts
git commit -m "feat: add typed data layer for portfolio content"
```

---

### Task 3: CSS Theme & Utilities

**Files:**
- Rewrite: `app/globals.css`

**Interfaces:**
- Consumes: none
- Produces: Tailwind theme tokens and utility classes for all components

- [ ] **Step 1: Rewrite `app/globals.css`**

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
  --color-surface-container-low: #1b1b1b;
  --color-surface-container-lowest: #0e0e0e;
  --color-surface-container-highest: #353535;
  --color-surface-bright: #393939;
  --color-surface-dim: #131313;
  --color-surface-variant: #353535;
  --color-surface-tint: #c6c6c7;
  --color-outline: #8e9192;
  --color-outline-variant: #444748;
  --color-primary-fixed: #e2e2e2;
  --color-primary-fixed-dim: #c6c6c7;
  --color-on-primary: #2f3131;
  --color-on-primary-container: #636565;
  --color-on-primary-fixed: #1a1c1c;
  --color-on-primary-fixed-variant: #454747;
  --color-primary-container: #e2e2e2;
  --color-secondary: #c8c6c5;
  --color-secondary-fixed: #e5e2e1;
  --color-secondary-fixed-dim: #c8c6c5;
  --color-on-secondary: #313030;
  --color-on-secondary-container: #b7b5b4;
  --color-on-secondary-fixed: #1c1b1b;
  --color-on-secondary-fixed-variant: #474746;
  --color-secondary-container: #474746;
  --color-tertiary: #ffffff;
  --color-tertiary-fixed: #e2e2e2;
  --color-tertiary-fixed-dim: #c6c6c7;
  --color-on-tertiary: #2f3131;
  --color-on-tertiary-container: #636565;
  --color-on-tertiary-fixed: #1a1c1c;
  --color-on-tertiary-fixed-variant: #454747;
  --color-tertiary-container: #e2e2e2;
  --color-error: #ffb4ab;
  --color-error-container: #93000a;
  --color-on-error: #690005;
  --color-on-error-container: #ffdad6;
  --color-inverse-surface: #e2e2e2;
  --color-inverse-on-surface: #303030;
  --color-inverse-primary: #5d5f5f;

  --radius: 0.125rem;
  --radius-lg: 0.25rem;
  --radius-xl: 0.5rem;
  --radius-full: 0.75rem;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}

body {
  font-family: "Geist", sans-serif;
  background-color: #131313;
  color: #e2e2e2;
  overflow-x: hidden;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-nav {
  background: rgba(19, 19, 19, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.img-placeholder {
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
}

.hero-placeholder {
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 70%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.badge-monochrome {
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}
```

- [ ] **Step 2: Verify dev server starts without CSS errors**

```bash
npm run dev
```
Expected: Server starts, page loads with dark background

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: migrate Tailwind CDN tokens to CSS @theme"
```

---

### Task 4: Root Layout

**Files:**
- Rewrite: `app/layout.tsx`

**Interfaces:**
- Consumes: CSS from `globals.css`
- Produces: HTML shell with Geist + JetBrains Mono fonts

- [ ] **Step 1: Rewrite `app/layout.tsx`**

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

- [ ] **Step 2: Verify layout loads**

```bash
npm run dev
```
Expected: Page loads with Geist font, dark background

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: setup root layout with Geist and JetBrains Mono fonts"
```

---

### Task 5: FloatingNav Component

**Files:**
- Create: `components/FloatingNav.tsx`

**Interfaces:**
- Consumes: `navLinks` from `@/data/portfolio`
- Produces: `<FloatingNav />` export

- [ ] **Step 1: Create `components/FloatingNav.tsx`**

```tsx
import { navLinks } from "@/data/portfolio";

export default function FloatingNav() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
      <div className="glass-nav px-6 py-3 rounded-full flex items-center space-x-8 shadow-2xl">
        {navLinks.map((link) => (
          <a
            key={link.href}
            className="text-white hover:opacity-100 opacity-60 transition-opacity"
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
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Verify component renders**

Add `<FloatingNav />` temporarily to `page.tsx` and check `npm run dev`.

- [ ] **Step 3: Commit**

```bash
git add components/FloatingNav.tsx
git commit -m "feat: add FloatingNav component"
```

---

### Task 6: Hero Component

**Files:**
- Create: `components/Hero.tsx`

**Interfaces:**
- Consumes: `profile` from `@/data/portfolio`
- Produces: `<Hero />` export

- [ ] **Step 1: Create `components/Hero.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify component renders**

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero component"
```

---

### Task 7: Skills Component

**Files:**
- Create: `components/Skills.tsx`

**Interfaces:**
- Consumes: `skills` from `@/data/portfolio`
- Produces: `<Skills />` export

- [ ] **Step 1: Create `components/Skills.tsx`**

```tsx
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="py-24 bg-background border-t border-white/5" id="skills">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Skills &amp; Focus Areas
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto mb-20 text-lg">
          Core competencies built through coursework, internship, and personal projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-8 glass-card rounded-[2rem] text-left">
              <div className="mb-8 h-56 rounded-2xl img-placeholder">Image</div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component renders**

- [ ] **Step 3: Commit**

```bash
git add components/Skills.tsx
git commit -m "feat: add Skills component"
```

---

### Task 8: Projects Component

**Files:**
- Create: `components/Projects.tsx`

**Interfaces:**
- Consumes: `projects` from `@/data/portfolio`
- Produces: `<Projects />` export

- [ ] **Step 1: Create `components/Projects.tsx`**

```tsx
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section className="py-24 bg-background" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-16">
          <div className="flex items-center space-x-4">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Showcase of<br />my best works
            </h2>
            <span className="text-5xl animate-pulse">&#x2728;</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-500">
              <div className="w-full h-64 img-placeholder border-0 rounded-0">Image</div>
              <div className="p-8 flex-grow">
                <h3 className="font-bold text-xl mb-3 text-white">{project.title}</h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full font-bold text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-white/5 flex justify-between items-center text-xs text-white/40">
                <div className="flex items-center space-x-2">
                  <span>&#x1F495; {project.likes}</span>
                </div>
                <a
                  className="hover:text-white transition-colors flex items-center font-bold uppercase tracking-widest text-[10px]"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Case
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            className="px-10 py-4 glass-card rounded-full text-sm font-bold text-white hover:bg-white/10 transition-all tracking-widest uppercase inline-block"
            href="https://github.com/dimss19"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component renders**

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx
git commit -m "feat: add Projects component"
```

---

### Task 9: WorkExperience Component (Client)

**Files:**
- Create: `components/WorkExperience.tsx`

**Interfaces:**
- Consumes: `experiences` from `@/data/portfolio`
- Produces: `<WorkExperience />` export

- [ ] **Step 1: Create `components/WorkExperience.tsx`**

```tsx
"use client";

import { useState } from "react";
import { experiences } from "@/data/portfolio";

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white text-center">Work experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="glass-card rounded-3xl overflow-hidden">
              <button
                className="w-full p-8 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors"
                onClick={() => toggle(i)}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl img-placeholder text-[10px]">
                    Image
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">{exp.role}</h4>
                    <p className="text-sm text-white/50">
                      {exp.company} &bull; {exp.period} &bull; {exp.location}
                    </p>
                  </div>
                </div>
                <div className={`bg-white/10 p-2 rounded-full transition-transform ${openIndex === i ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-10 text-sm text-white/60">
                  <div className="border-t border-white/10 pt-8">
                    <p className="font-bold mb-4 uppercase text-[10px] text-white/40 tracking-widest">
                      Key Impact &amp; Responsibilities:
                    </p>
                    <ul className="list-disc ml-4 space-y-3">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j}>{resp}</li>
                      ))}
                    </ul>
                  </div>
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

- [ ] **Step 2: Verify accordion toggles**

Click the experience header, verify it expands/collapses.

- [ ] **Step 3: Commit**

```bash
git add components/WorkExperience.tsx
git commit -m "feat: add WorkExperience component with accordion"
```

---

### Task 10: Education Component

**Files:**
- Create: `components/Education.tsx`

**Interfaces:**
- Consumes: `educations` from `@/data/portfolio`
- Produces: `<Education />` export

- [ ] **Step 1: Create `components/Education.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify component renders**

- [ ] **Step 3: Commit**

```bash
git add components/Education.tsx
git commit -m "feat: add Education component"
```

---

### Task 11: Organization Component

**Files:**
- Create: `components/Organization.tsx`

**Interfaces:**
- Consumes: `organizations` from `@/data/portfolio`
- Produces: `<Organization />` export

- [ ] **Step 1: Create `components/Organization.tsx`**

```tsx
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
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-2xl">
                  &#x1F91D;
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
```

- [ ] **Step 2: Verify component renders**

- [ ] **Step 3: Commit**

```bash
git add components/Organization.tsx
git commit -m "feat: add Organization component"
```

---

### Task 12: Certifications Component

**Files:**
- Create: `components/Certifications.tsx`

**Interfaces:**
- Consumes: `certifications` from `@/data/portfolio`
- Produces: `<Certifications />` export

- [ ] **Step 1: Create `components/Certifications.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify component renders**

- [ ] **Step 3: Commit**

```bash
git add components/Certifications.tsx
git commit -m "feat: add Certifications component"
```

---

### Task 13: Testimonials Component

**Files:**
- Create: `components/Testimonials.tsx`

**Interfaces:**
- Consumes: `testimonials` from `@/data/portfolio`
- Produces: `<Testimonials />` export

- [ ] **Step 1: Create `components/Testimonials.tsx`**

```tsx
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white text-center">What they say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-10 rounded-[2.5rem] relative flex flex-col">
              <div className="text-3xl text-white/10 absolute top-8 left-8">&quot;</div>
              <p className="text-lg italic leading-relaxed text-white/80 mb-10 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center space-x-4 mt-auto">
                <div className="w-12 h-12 rounded-2xl img-placeholder text-[10px]">Image</div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify component renders**

- [ ] **Step 3: Commit**

```bash
git add components/Testimonials.tsx
git commit -m "feat: add Testimonials component"
```

---

### Task 14: ContactCTA Component

**Files:**
- Create: `components/ContactCTA.tsx`

**Interfaces:**
- Consumes: `profile` from `@/data/portfolio`
- Produces: `<ContactCTA />` export

- [ ] **Step 1: Create `components/ContactCTA.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify component renders**

- [ ] **Step 3: Commit**

```bash
git add components/ContactCTA.tsx
git commit -m "feat: add ContactCTA component"
```

---

### Task 15: BackToTop Component (Client)

**Files:**
- Create: `components/BackToTop.tsx`

**Interfaces:**
- Produces: `<BackToTop />` export

- [ ] **Step 1: Create `components/BackToTop.tsx`**

```tsx
"use client";

export default function BackToTop() {
  return (
    <button
      className="fixed bottom-32 right-8 glass-card text-white p-4 rounded-2xl hover:scale-110 transition-all z-40 group"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
```

- [ ] **Step 2: Verify button scrolls to top**

- [ ] **Step 3: Commit**

```bash
git add components/BackToTop.tsx
git commit -m "feat: add BackToTop component"
```

---

### Task 16: Page Assembly

**Files:**
- Rewrite: `app/page.tsx`

**Interfaces:**
- Consumes: all 11 components
- Produces: complete page

- [ ] **Step 1: Rewrite `app/page.tsx`**

```tsx
import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Organization from "@/components/Organization";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <Hero />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
      <Organization />
      <Certifications />
      <Testimonials />
      <ContactCTA />
      <BackToTop />
    </>
  );
}
```

- [ ] **Step 2: Verify full page renders**

```bash
npm run dev
```
Expected: Complete page with all sections visible

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble all components in page.tsx"
```

---

### Task 17: Final Verification & Cleanup

**Files:**
- Modify: `AGENTS.md` (update to reflect new architecture)

**Interfaces:**
- Consumes: all previous tasks
- Produces: verified, working project

- [ ] **Step 1: Run lint**

```bash
npm run lint
```
Expected: No errors

- [ ] **Step 2: Run build**

```bash
npm run build
```
Expected: Build succeeds

- [ ] **Step 3: Visual comparison**

Open `npm run dev` side-by-side with `template.html`. Verify:
- All sections present
- Colors match
- Spacing matches
- Fonts load correctly
- Glassmorphism effects work
- Responsive layout works

- [ ] **Step 4: Test interactions**

- Click WorkExperience accordion header — verify expand/collapse
- Click BackToTop button — verify smooth scroll to top
- Click FloatingNav links — verify smooth scroll to sections
- Click project "View Case" links — verify they open GitHub

- [ ] **Step 5: Update AGENTS.md**

Update to reflect:
- Geist + JetBrains Mono fonts (not Plus Jakarta Sans)
- No Framer Motion
- CSS-only transitions
- Data-driven architecture

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio conversion from HTML to Next.js"
```
