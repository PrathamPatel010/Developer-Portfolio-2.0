"use client";
import Navbar from "@/app/components/Navbar";
import HeroSection from './components/HeroSection';
import SkillsSection from "./components/SkillsSection";
import ProjectCardSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import { projects } from './data/index';
import WorkExperience from "./components/WorkExperience";
export default function Home() {

  return (
    <main className="flex min-h-screen min-w-full bg-[#191b1b] bg-no-repeat">
      <Navbar />
      <div className={'container mt-24 mx-auto px-6 md:px-12 py-4'}>
        <HeroSection />
        <WorkExperience />
        <SkillsSection />
        <ProjectCardSection title={'Projects'} data={projects} />
      </div>
    </main>
  );
}
