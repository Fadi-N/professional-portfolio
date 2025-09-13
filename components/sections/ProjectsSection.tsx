import React from 'react';
import OverlappingCards from "@/components/overlapping-cards";
import {Section} from "@/components/ui/Section";
import {DefaultReveal} from "@/components/ui/DefaultReveal";

export const ProjectsSection = () => {
    return (
        <Section className="p-4 lg:py-8 xl:py-10 2xl:py-12 space-y-6 xl:space-y-8 2xl:space-y-10">
            <DefaultReveal className="flex flex-col space-y-2">
                <h1>Featured Works</h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-[#bd80b8]">A selection of projects where I've put my skills to the test—building,
                    designing, and refining experiences that matter.</p>
            </DefaultReveal>
            <OverlappingCards/>

        </Section>
    );
};