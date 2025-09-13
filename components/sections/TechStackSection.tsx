import React from 'react';
import TechStack from "@/components/tech-stack";
import {Section} from "@/components/ui/Section";
import {DefaultReveal} from "@/components/ui/DefaultReveal";

export const TechStackSection = () => {
    return (
        <Section className="hero-my-stacks">
            <DefaultReveal className="flex flex-col space-y-2">
                <h1>My Stacks</h1>
                <p className="text-[#bd80b8]">Always learning and exploring new trends and techniques to keep things
                    fresh and improve my skills.</p>
            </DefaultReveal>

            <div className="flex flex-col space-y-4">
                <TechStack/>
            </div>

        </Section>
    );
};