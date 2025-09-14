import React from 'react';
import { DefaultReveal } from "@/components/ui/DefaultReveal";

interface SectionHeaderProps {
    title: string;
    description: string;
    className?: string;
    delay?: number;
}

export const SectionHeader = ({ title, description, className = "", delay = 0 }: SectionHeaderProps) => {
    return (
        <DefaultReveal className={`flex flex-col gap-4 ${className}`} delay={delay}>
            <h1>{title}</h1>
            <p className="text-base lg:text-2xl text-[#bd80b8] lg:max-w-5xl">
                {description}
            </p>
        </DefaultReveal>
    );
};