import React from 'react';
import TechStack from "@/components/tech-stack";
import {Section} from "@/components/ui/Section";
import {SectionHeader} from "@/components/ui/SectionHeader";

export const TechStackSection = () => {
    return (
        <Section className="flex flex-col lg:pt-16 gap-4 lg:gap-8">
            <SectionHeader 
                title="My Stacks"
                description="Always learning and exploring new trends and techniques to keep things fresh and improve my skills."
            />
            <TechStack/>
        </Section>
    );
};