import React from 'react';
import OverlappingCards from "@/components/overlapping-cards";
import {Section} from "@/components/ui/Section";
import {SectionHeader} from "@/components/ui/SectionHeader";

export const ProjectsSection = () => {
    return (
        <Section className="p-4 lg:py-8 xl:py-10 2xl:py-12 space-y-6 xl:space-y-8 2xl:space-y-10">
            <SectionHeader 
                title="Featured Works"
                description="A selection of projects where I've put my skills to the test—building, designing, and refining experiences that matter."
            />
            <OverlappingCards/>

        </Section>
    );
};