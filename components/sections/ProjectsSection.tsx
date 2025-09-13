import React from 'react';
import OverlappingCards from "@/components/overlapping-cards";
import {Section} from "@/components/ui/Section";
import {DefaultReveal} from "@/components/ui/DefaultReveal";

export const ProjectsSection = () => {
    return (
        <Section className="hero-featured-work">
            <DefaultReveal className="flex flex-col space-y-2">
                <h1>Featured Works</h1>
                <p className="text-[#bd80b8]">A selection of projects where I’ve put my skills to the test—building,
                    designing, and refining experiences that matter.</p>
            </DefaultReveal>
            <OverlappingCards/>

        </Section>
    );
};