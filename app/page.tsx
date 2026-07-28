"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, MotionConfig } from "framer-motion";
import Link from "next/link";

function Nav() {
  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 100], [64, 48]);
  return (
    <MotionConfig transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
      <motion.nav
        style={{ height: navHeight }}
        className="sticky top-4 z-40 mx-auto max-w-5xl rounded-2xl border border-white/[0.08] bg-black/60 backdrop-blur-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 h-full">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-lg flex items-center">
            <div className="w-8 h-6 img-placeholder rounded text-[8px]">A</div>
          </div>
          <div className="hidden md:flex space-x-5 text-sm font-medium text-white/60">
            <a className="hover:text-white transition-colors" href="#home">Home</a>
            <a className="hover:text-white transition-colors" href="#projects">Projects</a>
            <a className="hover:text-white transition-colors" href="#achievements">Achievements</a>
            <a className="hover:text-white transition-colors" href="#articles">Articles</a>
            <a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
            <a className="hover:text-white transition-colors" href="#lounge">Lounge</a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-sm font-medium text-white/60 hover:text-white transition-colors">Sign In</button>
          <Link className="bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/25 transition-colors border border-white/10" href="#">
            Resume
          </Link>
        </div>
      </div>
      </motion.nav>
    </MotionConfig>
  );
}

function Hero() {
  return (
    <main id="home" className="pt-8 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden h-[400px] mb-[-80px] hero-placeholder"
          data-purpose="hero-banner"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-2xl opacity-20">Hero Background</span>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >Engineer. Build. Innovate.</motion.h1>
          </div>
        </motion.div>
        <div className="relative z-10 max-w-5xl mx-auto bg-black border border-white rounded-3xl p-8 shadow-none flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <motion.div
            className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-black border-4 border-white shadow-none img-placeholder"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Image</span>
          </motion.div>
          <div className="flex-grow text-center md:text-left">
            <motion.h2
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >Adimus Ricky Faisal Sahri</motion.h2>
            <motion.p
              className="text-white font-semibold text-lg opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >AIoT Engineer &amp; Full Stack Web Developer</motion.p>
            <motion.p
              className="text-white/60 mt-1 flex items-center justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd" />
              </svg>
              Indonesia
            </motion.p>
          </div>
          <motion.div
            className="flex space-x-8 text-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { label: "Projects", value: "15+" },
              { label: "Technologies", value: "20+" },
              { label: "IoT Systems", value: "5+" },
              { label: "Certifications", value: "4" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.65 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-white/50 text-xs uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  return (
    <section id="skills" className="py-20 bg-black border-t border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-white">Skills &amp; Services</h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-16">Designing intelligent IoT solutions and building scalable web applications with modern technologies.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-8 border border-white rounded-3xl text-left bg-black"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(255,255,255,0.3)"}}
          >
            <div className="mb-6 h-48 rounded-xl img-placeholder">Image</div>
            <span className="px-3 py-1 rounded-full text-xs font-bold badge-monochrome">Advanced</span>
            <h3 className="text-xl font-bold mt-4 mb-2 text-white">AIoT Engineering</h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">Designing intelligent IoT solutions using ESP32, MQTT, embedded sensors, real-time communication, and cloud-connected monitoring systems.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-white/40 rounded text-[10px] font-bold text-white">ESP32</span>
              <span className="px-2 py-1 border border-white/40 rounded text-[10px] font-bold text-white">MQTT</span>
              <span className="px-2 py-1 border border-white/40 rounded text-[10px] font-bold text-white">Embedded Systems</span>
            </div>
          </motion.div>
          <div className="p-8 border border-white rounded-3xl text-left bg-black">
            <div className="mb-6 h-48 rounded-xl img-placeholder">Image</div>
            <span className="px-3 py-1 rounded-full text-xs font-bold badge-monochrome">Advanced</span>
            <h3 className="text-xl font-bold mt-4 mb-2 text-white">Full Stack Web Development</h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">Building scalable and maintainable web applications using Laravel, Next.js, React, modern databases, and REST APIs.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-white/40 rounded text-[10px] font-bold text-white">Laravel</span>
              <span className="px-2 py-1 border border-white/40 rounded text-[10px] font-bold text-white">Next.js</span>
              <span className="px-2 py-1 border border-white/40 rounded text-[10px] font-bold text-white">MySQL</span>
            </div>
          </div>
          <div className="p-8 border border-white rounded-3xl text-left bg-black">
            <div className="mb-6 h-48 rounded-xl img-placeholder">Image</div>
            <span className="px-3 py-1 rounded-full text-xs font-bold badge-monochrome">Intermediate</span>
            <h3 className="text-xl font-bold mt-4 mb-2 text-white">Cloud &amp; DevOps</h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">Deploying applications with Docker, Linux servers, VPS environments, CI/CD workflows, and cloud infrastructure.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-white/40 rounded text-[10px] font-bold text-white">Docker</span>
              <span className="px-2 py-1 border border-white/40 rounded text-[10px] font-bold text-white">Ubuntu</span>
              <span className="px-2 py-1 border border-white/40 rounded text-[10px] font-bold text-white">VPS</span>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  return (
    <section id="projects" className="py-20 bg-black border-t border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2 mb-12">
          <h2 className="text-4xl font-bold text-white">Showcase of<br/>my best works</h2>
          <span className="text-4xl text-white grayscale">✨</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            className="bg-black rounded-3xl overflow-hidden border border-white flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <motion.div
              className="w-full h-48 img-placeholder overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <span>Image</span>
            </motion.div>
            <div className="p-6 flex-grow">
              <h3 className="font-bold text-lg mb-2 text-white">Surface Mine Production System</h3>
              <p className="text-white/60 text-xs mb-4">Mining attendance and production monitoring platform featuring multi-role dashboards, employee attendance, supervisor monitoring, and equipment management.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">Laravel</span>
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">MySQL</span>
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">Tailwind CSS</span>
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">JavaScript</span>
              </div>
            </div>
            <div className="p-4 border-t border-white/20 flex justify-between items-center text-xs text-white/50">
              <div className="flex items-center space-x-2"><span>🤍 0</span></div>
              <motion.button
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  View
                </motion.button>
            </div>
          </motion.div>
          {/* Project 2 */}
          <motion.div
            className="bg-black rounded-3xl overflow-hidden border border-white flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <motion.div
              className="w-full h-48 img-placeholder overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <span>Image</span>
            </motion.div>
            <div className="p-6 flex-grow">
              <h3 className="font-bold text-lg mb-2 text-white">TEGAP Smart Posture Corrector</h3>
              <p className="text-white/60 text-xs mb-4">AIoT wearable posture monitoring system using ESP32, dual MPU6050 sensors, MQTT, and a real-time web dashboard with 3D visualization.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">ESP32</span>
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">MQTT</span>
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">React</span>
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">Three.js</span>
              </div>
            </div>
            <div className="p-4 border-t border-white/20 flex justify-between items-center text-xs text-white/50">
              <div className="flex items-center space-x-2"><span>🤍 0</span></div>
              <motion.button
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  View
                </motion.button>
            </div>
          </motion.div>
          {/* Project 3 */}
          <motion.div
            className="bg-black rounded-3xl overflow-hidden border border-white flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <motion.div
              className="w-full h-48 img-placeholder overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <span>Image</span>
            </motion.div>
            <div className="p-6 flex-grow">
              <h3 className="font-bold text-lg mb-2 text-white">Industrial Retort Logger</h3>
              <p className="text-white/60 text-xs mb-4">Industrial AIoT monitoring device capable of real-time logging, offline storage, MQTT synchronization, and USB data export for manufacturing environments.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">ESP32-S3</span>
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">MQTT</span>
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">Laravel</span>
                <span className="text-[10px] px-2 py-1 border border-white/40 rounded font-bold text-white">LittleFS</span>
              </div>
            </div>
            <div className="p-4 border-t border-white/20 flex justify-between items-center text-xs text-white/50">
              <div className="flex items-center space-x-2"><span>🤍 0</span></div>
              <motion.button
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  View
                </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <button className="px-6 py-2 border border-white rounded-full text-sm font-medium bg-black text-white hover:bg-white hover:text-black transition-all">View all projects →</button>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  return (
    <section id="experience" className="py-20 bg-black border-t border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white">Work experience</h2>
        <div className="space-y-4">
          <div className="border border-white rounded-2xl overflow-hidden bg-black" data-purpose="experience-accordion">
            <div className="p-6 flex justify-between items-center bg-black cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black border border-white/40 rounded-xl img-placeholder text-[10px]">Image</div>
                <div>
                  <h4 className="font-bold text-white">IoT Division Mentor</h4>
                  <p className="text-sm text-white/60">PROVOKS (Programmer Vokasi) • Mentoring Period • Indonesia</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <div className="px-6 pb-8 text-sm text-white/70">
              <div className="border-t border-white/20 pt-4">
                <p className="font-bold mb-2 uppercase text-[10px] text-white/40 tracking-wider">Responsibilities:</p>
                <ul className="list-disc ml-4 space-y-2">
                  <li>Mentoring students in embedded systems and IoT development.</li>
                  <li>Assisting ESP32-based hardware projects.</li>
                  <li>Developing practical AIoT learning modules.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border border-white rounded-2xl p-6 flex justify-between items-center bg-black">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black border border-white/40 rounded-xl img-placeholder text-[10px]">Image</div>
              <div>
                <h4 className="font-bold text-white">IT Intern</h4>
                <p className="text-sm text-white/60">Serbu Computer • Internship Period • Indonesia</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  return (
    <section id="education" className="py-20 bg-black border-t border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white">Education</h2>
        <div className="space-y-4">
          <div className="border border-white rounded-2xl p-6 flex justify-between items-center bg-black">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black border border-white/40 rounded-xl img-placeholder text-lg">🎓</div>
              <div>
                <h4 className="font-bold text-lg text-white">Information Technology Student</h4>
                <p className="text-sm text-white/60">Currently pursuing IT degree • Indonesia</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  return (
    <section id="achievements" className="py-20 bg-black border-t border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🏆", label: "Achievement or Award Title..." },
            { icon: "💻", label: "Certification or Competition..." },
            { icon: "📜", label: "Course or Workshop Completion..." },
          ].map((item, i) => (
            <div key={i} className="border border-white rounded-3xl overflow-hidden bg-black">
              <div className="w-full aspect-[16/11] img-placeholder">Image</div>
              <div className="p-4 border-t border-white/20 flex items-center space-x-3 bg-black">
                <div className="w-8 h-8 rounded border border-white/20 bg-black flex items-center justify-center text-white">{item.icon}</div>
                <p className="text-xs font-bold truncate text-white">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="text-sm font-medium text-white/50 hover:text-white transition-colors">View all achievements →</button>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  return (
    <section id="testimonials" className="py-20 bg-black border-t border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white">What they say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-black border border-white text-white p-6 rounded-3xl relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <p className="text-sm italic leading-relaxed mb-6">&quot;Insert a testimonial from a client or colleague here describing your work ethic and impact.&quot;</p>
              <div className="flex items-center space-x-3 mt-auto">
                <div className="w-10 h-10 rounded-full img-placeholder text-[10px]">Image</div>
                <div>
                  <p className="text-xs font-bold">Person Name</p>
                  <p className="text-[10px] text-white/50">Title / Company</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
}

function FooterCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  return (
    <section className="py-32 bg-black text-center border-t border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-lg text-white/60 mb-2">Have a project in mind?</p>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">Let&amp;apos;s build something great.</h2>
        <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">Get in touch</button>
        <div className="mt-16 pt-16 border-t border-white/10">
          <p className="text-sm text-white/40 mb-6">Local time: --:--:--</p>
          <div className="flex justify-center space-x-6 mb-12">
            <a className="text-white/40 hover:text-white" href="#">LinkedIn</a>
            <a className="text-white/40 hover:text-white" href="#">GitHub</a>
            <a className="text-white/40 hover:text-white" href="#">Dribbble</a>
            <a className="text-white/40 hover:text-white" href="#">Instagram</a>
            <a className="text-white/40 hover:text-white" href="#">X</a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-widest">
            <p>© 2024 Your Name. All rights reserved</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a className="hover:text-white" href="#">Changelog</a>
              <a className="hover:text-white" href="#">Gear &amp; Setup</a>
              <a className="hover:text-white" href="#">Inspiration Website</a>
              <a className="hover:text-white" href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

function BackToTop() {
  return (
    <motion.button
      className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-xl shadow-none border border-black"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-black">
      <Hero />
      <Nav />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <TestimonialsSection />
      {/* Current Focus */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white">Current Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Artificial Intelligence of Things (AIoT)", "Full Stack Development", "Docker & Containerization", "Linux Server Administration", "CI/CD", "Cloud Deployment", "Machine Learning Integration", "Modern AI-assisted Development"].map((item, i) => (
              <div key={i} className="p-4 border border-white/20 rounded-xl bg-black text-white/80 text-sm hover:text-white transition-colors">
                <span className="text-white/40 mr-2">▸</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Future Roadmap */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white">Future Roadmap</h2>
          <div className="space-y-4">
            {["AIoT Engineer", "Full Stack Engineer", "Cloud & DevOps", "Edge AI", "System Architecture"].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 border border-white/20 rounded-xl bg-black">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs font-bold">{i + 1}</div>
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterCTA />
      <BackToTop />
    </div>
  );
}
