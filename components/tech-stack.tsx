import { FaReact, FaArrowRight } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { BsBootstrap } from "react-icons/bs";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const techStacks = [
    { title: "React", description: "A JavaScript library for building UI", icon: <FaReact size={32} /> },
    { title: "Next.js", description: "The React framework for the web", icon: <TbBrandNextjs size={32} /> },
    { title: "JavaScript", description: "The language of the web", icon: <RiJavascriptLine size={32} /> },
    { title: "TypeScript", description: "JavaScript with static types", icon: <TbBrandTypescript size={32} /> },
    { title: "Bootstrap", description: "A responsive CSS framework", icon: <BsBootstrap size={32} /> },
    { title: "Tailwind CSS", description: "Utility-first CSS framework", icon: <SiTailwindcss size={32} /> },
    { title: "Figma", description: "Design and prototyping tool", icon: <SiFigma size={32} /> },
];

const TechStack = () => {
    return (
        <div className="flex flex-col space-y-4">
            {techStacks.map((stack, index) => (
                <div key={index} className="flex space-x-16">
                    <div className="hero-stack group hover:cursor-pointer transition-all duration-300 flex-1 p-4 border rounded-xl">
                        <div className="flex items-center justify-between">
                            {stack.icon}
                        </div>
                        <div className="flex-1 mt-2">
                            <h5 className="font-semibold text-lg">{stack.title}</h5>
                            <div className="flex items-center justify-between">
                                <p className="hero-stack-description text-gray-500">{stack.description}</p>
                                <FaArrowRight
                                    className="text-lg transform transition-transform duration-300 group-hover:-rotate-45 group-hover:text-[#74b5a5]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechStack;
