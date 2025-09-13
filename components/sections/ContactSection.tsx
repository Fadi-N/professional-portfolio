import React from 'react';
import {FaArrowRight} from "react-icons/fa6";
import {Section} from "@/components/ui/Section";
import {DefaultReveal} from "@/components/ui/DefaultReveal";
import { EXTERNAL_LINKS, CONTACT_INFO } from "@/constants";

export const ContactSection = () => {
    return (
        <Section id="contact" className="flex flex-col px-2 py-80 md:py-[25rem] 2xl:py-[35rem] space-y-2 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
            <DefaultReveal className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-center">Need a Frontend Developer? <br/>Let&apos;s talk! 💬</h1>
                <h4 className="text-center text-[#bd80b8] font-normal">We can team up and build something great. <br/> Drop me a message!</h4>
            </DefaultReveal>
            <DefaultReveal className="flex flex-col items-center justify-center">
                <h6 className="text-center font-light">Contact me:</h6>
                <h6 className="text-center font-light">
                    <div className="flex items-center space-x-2 group ">
                        <FaArrowRight
                            className="lg:size-4 transform transition-all duration-300 group-hover:rotate-0 -rotate-45 group-hover:text-[#74b5a5]"
                        />
                        <a
                            className="transition-colors duration-300 group-hover:text-[#74b5a5]"
                            href={EXTERNAL_LINKS.EMAIL}
                        >
                            {CONTACT_INFO.EMAIL}
                        </a>
                    </div>

                </h6>
            </DefaultReveal>
        </Section>
    );
};
