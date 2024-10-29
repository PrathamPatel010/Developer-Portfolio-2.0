"use client";
import Navbar from "@/app/components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectCardSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import { projects } from "./data/index";
import WorkExperience from "./components/WorkExperience";
export default function Home() {
  
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Pratham Patel",
        url: "https://prathampatel.vercel.app",
        sameAs: [
          "https://github.com/PrathamPatel010",
          "https://www.linkedin.com/in/pratham-patel-08865821b/",
        ],
        jobTitle: "Full Stack Developer",
        worksFor: {
          "@type": "Organization",
          name: "System Level Solutions: SLS",
        },
      }),
    }}
  />;

  return (
    <main className="flex min-h-screen min-w-full bg-[#191b1b] bg-no-repeat">
      <Navbar />
      <div className={"container mt-24 mx-auto px-6 md:px-12 py-4"}>
        <HeroSection />
        <WorkExperience />
        <SkillsSection />
        <ProjectCardSection title={"Projects"} data={projects} />
        <EmailSection />
      </div>
    </main>
  );
}
