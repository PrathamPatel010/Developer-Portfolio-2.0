"use client";
import Navbar from "@/app/components/Navbar";
import HeroSection from './components/HeroSection';
import SkillsSection from "./components/SkillsSection";
import ProjectCardSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import { projects } from './data/index';
import Footer from "@/app/components/Footer";
import Contribution from "@/app/components/Contribution";
import WorkExperience from "./components/WorkExperience";
export default function Home() {

  return (
    // <main style={{backgroundImage:`url(images/banner-bg.png)`,backgroundSize:"contain"}} className="flex min-h-screen min-w-full bg-[#121212] bg-no-repeat">
    <main className="flex min-h-screen min-w-full bg-[#191b1b] bg-no-repeat">
      <Navbar />
      <div className={'container mt-24 mx-auto px-6 md:px-12 py-4'}>
        <HeroSection />
        <WorkExperience />
        <Contribution />
        <SkillsSection />
        <ProjectCardSection title={'Projects'} data={projects} />
        <EmailSection />
      </div>
    </main>
  );
}
