import React from 'react';
import TechStack from "@/components/tech-stack";
import {Section} from "@/components/ui/Section";
import {DefaultReveal} from "@/components/ui/DefaultReveal";

export const TechStackSection = () => {
    return (
        <Section className="flex flex-col p-4 lg:py-8 gap-2 lg:gap-10">
            <DefaultReveal className="flex flex-col gap-4">
                <h1>My Stacks</h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-[#bd80b8] lg:max-w-3xl">Always learning and exploring new trends and techniques to keep things
                    fresh and improve my skills.</p>
            </DefaultReveal>
            <TechStack/>
        </Section>
    );
};