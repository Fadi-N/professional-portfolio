import React from 'react';
import OverlappingCards from "@/components/overlapping-cards";
import {Section} from "@/components/ui/Section";
import {SectionHeader} from "@/components/ui/SectionHeader";

export const ProjectsSection = () => {
    return (
        <Section className="flex flex-col gap-4 lg:gap-8 lg:pt-16">
            <SectionHeader 
                title="Featured Works"
                description="A selection of projects where I've put my skills to the test—building, designing, and refining experiences that matter."
            />
            <OverlappingCards/>
        </Section>
    );
};