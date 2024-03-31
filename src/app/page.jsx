import Navbar from "@/app/components/Navbar";
import HeroSection from './components/HeroSection';
import SkillsSection from "./components/SkillsSection";
import ProjectCardSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import {projects} from './data/index';
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#121212]">
            <Navbar/>
        <div className={'container mt-24 mx-auto px-12 py-4'}>
            <HeroSection/>
            <SkillsSection/>
            <ProjectCardSection title={'Projects'} data={projects}/>
            <EmailSection/>
            <Footer/>
        </div>
    </main>
  );
}
