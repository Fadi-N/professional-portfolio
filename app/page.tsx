'use client'
import {HeroSection} from "@/components/sections/HeroSection";
import {TechStackSection} from "@/components/sections/TechStackSection";
import {ProjectsSection} from "@/components/sections/ProjectsSection";
import {ContactSection} from "@/components/sections/ContactSection";



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
