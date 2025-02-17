import {FaReact, FaArrowRight} from "react-icons/fa";
import {TbBrandNextjs, TbBrandTypescript} from "react-icons/tb";
import {RiJavascriptLine} from "react-icons/ri";
import {BsBootstrap} from "react-icons/bs";
import {SiTailwindcss, SiFigma} from "react-icons/si";
import Link from "next/link";

const techStacks = [
    {
        title: "React",
        description: "A JavaScript library for building UI",
        link: "https://react.dev",
        icon: <FaReact size={32}/>
    },
    {
        title: "Next.js",
        description: "The React framework for the web",
        link: "https://nextjs.org/docs",
        icon: <TbBrandNextjs size={32}/>
    },
    {
        title: "JavaScript",
        description: "The language of the web",
        link: "https://devdocs.io/javascript/",
        icon: <RiJavascriptLine size={32}/>
    },
    {
        title: "TypeScript",
        description: "JavaScript with static types",
        link: "https://www.typescriptlang.org/docs/",
        icon: <TbBrandTypescript size={32}/>
    },
    {
        title: "Bootstrap",
        description: "A responsive CSS framework",
        link: "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
        icon: <BsBootstrap size={32}/>
    },
    {
        title: "Tailwind CSS",
        description: "Utility-first CSS framework",
        link: "https://v2.tailwindcss.com/docs",
        icon: <SiTailwindcss size={32}/>
    },
    {
        title: "Figma",
        description: "Design and prototyping tool",
        link: "https://help.figma.com/hc/en-us/categories/360002051613-Get-started",
        icon: <SiFigma size={32}/>
    },
];

const TechStack = () => {
    return (
        <div className="grid grid-cols-2 gap-x-16">
            {techStacks.map((stack, index) => (
                <Link
                    key={index}
                    className={`hero-stack group hover:cursor-pointer transition-all duration-300 ${
                        index === techStacks.length - 1 ? "col-span-2" : ""
                    }`}
                    href={stack.link}
                >
                    <div
                        className="flex items-center justify-between border md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl p-2 group-hover:text-[#74b5a5]">
                        {stack.icon}
                    </div>
                    <div className="flex-1">
                        <h5 className="group-hover:text-[#74b5a5]">{stack.title}</h5>
                        <div className="flex items-center justify-between">
                            <p className="hero-stack-description group-hover:text-[#74b5a5]">{stack.description}</p>
                            <FaArrowRight
                                className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl transform transition-transform duration-300 group-hover:-rotate-45 group-hover:text-[#74b5a5]"/>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TechStack;
