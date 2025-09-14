import React from 'react';

import {DefaultReveal} from "@/components/ui/DefaultReveal";
import {LinkWithIcon} from "@/components/ui/LinkWithIcon";
import {Section} from "@/components/ui/Section";
import { EXTERNAL_LINKS, CONTACT_INFO } from "@/constants";

export const ContactSection = () => {
    return (
        <Section id="contact" className="flex min-h-screen flex-col items-center justify-center space-y-2 px-2 lg:space-y-8">
            <DefaultReveal className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-center">Need a Frontend Developer? <br/>Let&apos;s talk! 💬</h1>
                <h4 className="text-center font-normal text-[#bd80b8]">We can team up and build something great. <br/> Drop me a message!</h4>
            </DefaultReveal>
            <DefaultReveal className="flex flex-col items-center justify-center">
                <h6 className="text-center font-light">Contact me:</h6>
                <h6 className="text-center font-light">
                    <LinkWithIcon href={EXTERNAL_LINKS.EMAIL} title={CONTACT_INFO.EMAIL}/>
                </h6>
            </DefaultReveal>
        </Section>
    );
};
