import Link from "next/link";
import {BsBootstrap} from "react-icons/bs";
import {FaReact, FaArrowRight} from "react-icons/fa";
import {RiJavascriptLine} from "react-icons/ri";
import {SiTailwindcss, SiFigma, SiMedusa, SiPayloadcms} from "react-icons/si";
import {TbBrandNextjs, TbBrandTypescript} from "react-icons/tb";

import {DefaultReveal} from "@/components/ui/DefaultReveal";
import { TECH_LINKS } from "@/constants";

const techStacks = [
    {
        title: "React",
        description: "A JavaScript library for building UI",
        link: TECH_LINKS.REACT,
        icon: <FaReact size={32}/>
    },
    {
        title: "Next.js",
        description: "The React framework for the web",
        link: TECH_LINKS.NEXTJS,
        icon: <TbBrandNextjs size={32}/>
    },
    {
        title: "JavaScript",
        description: "The language of the web",
        link: TECH_LINKS.JAVASCRIPT,
        icon: <RiJavascriptLine size={32}/>
    },
    {
        title: "TypeScript",
        description: "JavaScript with static types",
        link: TECH_LINKS.TYPESCRIPT,
        icon: <TbBrandTypescript size={32}/>
    },
    {
        title: "Bootstrap",
        description: "A responsive CSS framework",
        link: TECH_LINKS.BOOTSTRAP,
        icon: <BsBootstrap size={32}/>
    },
    {
        title: "Tailwind CSS",
        description: "Utility-first CSS framework",
        link: TECH_LINKS.TAILWINDCSS,
        icon: <SiTailwindcss size={32}/>
    },
    {
        title: "Medusa.js",
        description: "Flexible commerce platform",
        link: TECH_LINKS.MEDUSA,
        icon: <SiMedusa size={32}/>
    },
    {
        title: "Payload CMS",
        description: "Headless CMS",
        link: TECH_LINKS.PAYLOAD,
        icon: <SiPayloadcms size={32}/>
    },
    {
        title: "Figma",
        description: "Design and prototyping tool",
        link: TECH_LINKS.FIGMA,
        icon: <SiFigma size={32}/>
    },
];

const TechStack = () => {
    return (
        <div className="grid gap-x-16 md:grid-cols-2">
            {techStacks.map((stack, index) => (
                <DefaultReveal delay={0.1 * index} key={index}>
                    <Link
                        key={index}
                        className={`
                          group flex flex-1 items-center gap-x-4 border-b py-4 transition-all duration-300
                          hover:cursor-pointer
                          lg:py-8
                          ${
                            index === techStacks.length - 1 ? "lg:col-span-2" : ""
                        }`}
                        href={stack.link}
                    >
                        <div
                            className={`
                              flex items-center justify-between rounded-lg border p-2 transition-colors duration-300
                              group-hover:text-[#74b5a5]
                              xl:rounded-xl
                              2xl:rounded-2xl
                            `}>
                            {stack.icon}
                        </div>
                        <div className="flex-1">
                            <h5 className="transition-colors duration-300 group-hover:text-[#74b5a5]">{stack.title}</h5>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-black/50 transition-colors duration-300 group-hover:text-[#74b5a5]">{stack.description}</p>
                                <FaArrowRight
                                    className={`
                                      size-4 -rotate-45 transform transition-all duration-300
                                      group-hover:-rotate-0 group-hover:text-[#74b5a5]
                                      lg:size-5
                                    `}/>
                            </div>
                        </div>
                    </Link>
                </DefaultReveal>
            ))}
        </div>
    );
};

export default TechStack;
