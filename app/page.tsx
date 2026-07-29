import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Organization from "@/components/Organization";
import Certifications from "@/components/Certifications";
import ContactCTA from "@/components/ContactCTA";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Adimus Ricky Faisal Sahri",
            jobTitle: "Web Developer & IoT Enthusiast",
            url: "https://adimusricky.vercel.app",
            image: "https://adimusricky.vercel.app/assets/profile-photo.jpg",
            sameAs: [
              "https://www.linkedin.com/in/adimusricky",
              "https://github.com/dimss19",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Malang",
              addressRegion: "Jawa Timur",
              addressCountry: "ID",
            },
          }),
        }}
      />
      <FloatingNav />
      <Hero />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
      <Organization />
      <Certifications />
      <ContactCTA />
      <BackToTop />
    </>
  );
}
