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
