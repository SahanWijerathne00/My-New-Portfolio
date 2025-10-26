import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import About from "@/components/AboutSection";
import Skills from "@/components/SkillsSection";
import SoftSkills from "@/components/SoftSkillsSection";
import Projects from "@/components/ProjectSection";
import Education from "@/components/EducationSection";
import Contact from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
