"use client"; // jeśli używasz Next.js 13+ z app router

import {motion, useScroll, useTransform} from "framer-motion";

export default function OverlappingCards() {
    const {scrollYProgress} = useScroll();

    const card1Y = useTransform(scrollYProgress, [0.15, .95], [260, -160]);
    const card2Y = useTransform(scrollYProgress, [0.3, .95], [300, -120]);
    const card3Y = useTransform(scrollYProgress, [0.45, .95], [340, -80]);
    const card4Y = useTransform(scrollYProgress, [0.6, .95], [380, -40]);
    const card5Y = useTransform(scrollYProgress, [0.75, .95], [420, 0]);

    return (
        <div className="relative h-[600vh]">
            <motion.div
                style={{y: card1Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div className="w-full h-[800px] bg-[#c59172]">
                    Card 1
                </div>
            </motion.div>

            <motion.div
                style={{y: card2Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div className="w-full h-[800px] bg-[#ccb987] text-white flex items-center justify-center rounded-lg">
                    Card 2
                </div>
            </motion.div>

            <motion.div
                style={{y: card3Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div
                    className="w-full h-[800px] bg-[#79a978] text-white flex items-center justify-center rounded-lg">
                    Card 3
                </div>
            </motion.div>
            <motion.div
                style={{y: card4Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div
                    className="w-full h-[800px] bg-[#6ba6ef] text-white flex items-center justify-center rounded-lg">
                    Card 4
                </div>
            </motion.div>
            <motion.div
                style={{y: card5Y}}
                className="sticky top-0 h-screen flex items-center justify-center z-30"
            >
                <div
                    className="w-full h-[800px] bg-[#9c9cf8] text-white flex items-center justify-center rounded-lg">
                    Card5
                </div>
            </motion.div>
        </div>
    );
}
