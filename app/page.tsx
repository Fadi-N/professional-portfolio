'use client'
import {ContactSection} from "@/components/sections/ContactSection";
import {HeroSection} from "@/components/sections/HeroSection";
import {ProjectsSection} from "@/components/sections/ProjectsSection";
import {TechStackSection} from "@/components/sections/TechStackSection";



export default function Home() {
    return (
        <div>
            <HeroSection/>
            <TechStackSection/>
            <ProjectsSection/>
            <ContactSection/>
        </div>
    );
}
