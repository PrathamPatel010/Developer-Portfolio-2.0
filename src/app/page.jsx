import Navbar from "@/app/components/Navbar";
import HeroSection from './components/HeroSection';
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#121212]">
            <Navbar/>
        <div className={'container mt-24 mx-auto px-12 py-4'}>
            <HeroSection/>
            <SkillsSection/>
        </div>
    </main>
  );
}
