"use client";
import Navbar from "@/app/components/Navbar";
import HeroSection from './components/HeroSection';
import SkillsSection from "./components/SkillsSection";
import ProjectCardSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import {projects} from './data/index';
import Footer from "@/app/components/Footer";
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout); // Cleanup function
    }, []);

    if (loading){
        return (
            <section className="loader-body">
                <Loader/>
            </section>
        )
    }

    return (
      <main style={{backgroundImage:`url(images/banner-bg.png)`,backgroundRepeat:"no-repeat",backgroundSize:'cover'}} className="flex min-h-screen bg-[#121212]">
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
