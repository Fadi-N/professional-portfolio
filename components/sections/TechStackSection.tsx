import React from 'react';
import TechStack from "@/components/tech-stack";
import {Section} from "@/components/ui/Section";
import {DefaultReveal} from "@/components/ui/DefaultReveal";

export const TechStackSection = () => {
    return (
        <Section className="p-4 lg:py-8 xl:py-10 2xl:py-12 space-y-2 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
            <DefaultReveal className="flex flex-col space-y-2">
                <h1>My Stacks</h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-[#bd80b8]">Always learning and exploring new trends and techniques to keep things
                    fresh and improve my skills.</p>
            </DefaultReveal>

            <div className="flex flex-col space-y-4">
                <TechStack/>
            </div>

        </Section>
    );
};