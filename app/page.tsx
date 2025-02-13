'use client'

import {motion} from "motion/react"
import Image from "next/image";

export default function Home() {
    return (
        <main className="hero">
            <div className="hero-intro">
                <div>
                    <div className="flex">
                        <p className="text-[11.25rem] leading-[12rem]">Creative</p>
                        <motion.div
                            className="flex items-center mx-14"
                            initial={{rotate: 0}}
                            animate={{rotate: 360}}
                            transition={{
                                duration: 4,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            <Image src="/react.png" alt="react.png" width={100} height={100}/>
                        </motion.div>

                    </div>
                    <div>
                        <p className="text-[11.25rem] leading-[12rem]">
                            <span className="text-[#d0b880]">&lt;</span>
                            <span className="text-[#5db7a4]">FRONTEND</span>
                            <span className="text-[#d0b880]">/&gt;</span>
                        </p>
                    </div>
                    <div className="flex relative">
                        <p className="flex-1 text-[11.25rem] leading-[13rem]">
                            <span>DEVEL</span>
                            <span className="text-[#bcbec3]">(</span>
                            <span>PER</span>
                            <span className="text-[#bcbec3]">)</span>
                        </p>
                        <motion.div
                            className="absolute end-0 bottom-0"
                            initial={{x: 0, y: 0}}
                            animate={{x: [0, -300, 0], y: [0, -200, 0]}}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror"
                            }}
                        >
                            <Image src="/cursor.png" alt="react.png" width={50} height={50}/>
                        </motion.div>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-geist-1000">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00AC3A]"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-[#00CA50]"></span>
                    </span>
                    <p>Open to Work</p>
                </div>
            </div>
        </main>
    );
}
