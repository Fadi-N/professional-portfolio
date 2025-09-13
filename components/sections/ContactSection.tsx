import React from 'react';
import {FaArrowRight} from "react-icons/fa6";
import {Section} from "@/components/ui/Section";
import {DefaultReveal} from "@/components/ui/DefaultReveal";

export const ContactSection = () => {
    return (
        <Section id="contact" className="flex flex-col px-2 py-80 md:py-[25rem] 2xl:py-[35rem] space-y-2 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
            <DefaultReveal className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-center">Need a Frontend Developer? <br/>Let&apos;s talk! 💬</h1>
                <h3 className="text-center text-[#bd80b8]">We can team up and build something great. <br/> Drop me a message!</h3>
            </DefaultReveal>
            <DefaultReveal className="flex flex-col items-center justify-center">
                <p className="text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-center md:text-start">Contact me:</p>
                <h4 className="text-center md:text-start">
                    <div className="flex items-center space-x-2 group ">
                        <a
                            className="transition-colors duration-300 group-hover:text-[#74b5a5]"
                            href="mailto:fadinachawati17@gmail.com"
                        >
                            fadinachawati17@gmail.com
                        </a>
                        <FaArrowRight
                            className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl transform transition-all duration-300 group-hover:-rotate-45 group-hover:text-[#74b5a5]"
                        />
                    </div>

                </h4>
            </DefaultReveal>
        </Section>
    );
};
