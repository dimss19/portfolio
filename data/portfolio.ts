export interface Profile {
  name: string;
  title: string;
  description: string;
  location: string;
  photo: string;
  stats: { label: string; value: string }[];
  social: { platform: string; url: string }[];
}

export interface Skill {
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  image: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  program: string;
  period: string;
  image: string;
}

export interface Organization {
  name: string;
  role: string;
  period: string;
  image: string;
}

export interface Certification {
  title: string;
  image: string;
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
  description: "",
  location: "Malang, Jawa Timur, Indonesia",
  photo: "/assets/profile-photo.jpg",
  stats: [
    { label: "Projects", value: "3" },
    { label: "Certifications", value: "3" },
    { label: "Internships", value: "1" },
    { label: "Focus", value: "2" },
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
    image: "/assets/skills/web-development.jpg",
    tags: ["Laravel", "React", "PHP", "MySQL"],
  },
  {
    category: "IoT",
    title: "IoT Development",
    description: "Designing connected devices and monitoring systems using microcontrollers and sensors.",
    image: "/assets/skills/iot.jpg",
    tags: ["ESP32", "MQTT", "Sensor Integration"],
  },
  {
    category: "Infrastructure",
    title: "Network & Systems",
    description: "Configuring and troubleshooting networks, servers, and hardware from a TKJ background.",
    image: "/assets/skills/network.jpg",
    tags: ["Mikrotik", "LAN/WAN", "Cloud Basics"],
  },
];

export const projects: Project[] = [
  {
    title: "Smart Posture Corrector",
    description: "IoT-based body posture monitoring system with ESP32, MPU6050 sensors, and real-time 3D visualization dashboard. Monitors back angle and provides instant feedback via MQTT protocol.",
    image: "/assets/projects/smart-posture.jpg",
    tags: ["ESP32", "MQTT", "Laravel", "3D Visualization"],
    likes: 0,
    url: "https://github.com/dimss19/smart-posture-corrector",
  },
  {
    title: "SCADA Retort Monitor",
    description: "Industrial SCADA system for monitoring retort sterilization machines. Built with Laravel, Modbus integration for TN-series controllers, real-time telemetry, and port management.",
    image: "/assets/projects/scada-retort.jpg",
    tags: ["Laravel", "Modbus", "TypeScript", "IoT"],
    likes: 0,
    url: "https://github.com/dimss19/scada-retort",
  },
  {
    title: "Retort Monitor (Indah Mesin)",
    description: "Web-based monitoring for retort sterilization machines with real-time temperature/pressure gauges, Chart.js visualization, and RBAC authentication. Contributed to Laravel + React + Inertia.js stack.",
    image: "/assets/projects/retort-monitor.jpg",
    tags: ["Laravel", "React", "Inertia.js", "Chart.js"],
    likes: 0,
    url: "https://github.com/Kacong05/project-indah-mesin",
  },
];

export const experiences: Experience[] = [
  {
    role: "Internship Technician",
    company: "Serbu Computer",
    image: "/assets/experience/serbu-computer.jpg",
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
    image: "/assets/education/universitas-brawijaya.jpg",
  },
  {
    institution: "SMKN 6 Malang",
    program: "Teknik Komputer dan Jaringan",
    period: "2021 - 2024",
    image: "/assets/education/smkn-6-malang.jpg",
  },
];

export const organizations: Organization[] = [
  {
    name: "PROVOKS (Programmer Vokasi)",
    role: "IoT Division Mentor",
    period: "2025 - Present",
    image: "/assets/organization/provoks.jpg",
  },
];

export const certifications: Certification[] = [
  { title: "Microsoft Office Desktop Application", image: "/assets/certifications/microsoft-office.jpg" },
  { title: "Content Creator (BNSP)", image: "/assets/certifications/content-creator.jpg" },
  { title: "Dasar Visualisasi Data (Dicoding)", image: "/assets/certifications/dasar-visualisasi-data.jpg" },
  { title: "Dasar AI (Dicoding)", image: "/assets/certifications/dasar-ai.jpg" },
];
