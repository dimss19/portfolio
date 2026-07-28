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
