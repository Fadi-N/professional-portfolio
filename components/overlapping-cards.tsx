"use client"; // jeśli używasz Next.js 13+ z app router

import { motion, useScroll, useTransform } from "framer-motion";

export default function OverlappingCards() {
    // Wyciągamy "progres" scrolla w zakresie 0–1
    const { scrollYProgress } = useScroll();

    // Definiujemy przesunięcia w osi Y dla każdej karty w zależności od scrolla:
    // Dla [0, 1] –> [początkowa wartość, końcowa wartość]
    const card1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const card2Y = useTransform(scrollYProgress, [0, 1], [200, -100]);
    const card3Y = useTransform(scrollYProgress, [0, 1], [400, 0]);

    return (
        // Kontener z dużą wysokością, by umożliwić scroll
        <div className="relative h-[400vh]">
            {/* KARTA 1 */}
            <motion.div
                style={{ y: card1Y }}
                className="
          sticky top-0
          h-screen
          flex items-center justify-center
          z-10
        "
            >
                <div className="w-[300px] h-[400px] bg-red-500 text-white flex items-center justify-center rounded-lg">
                    Card 1
                </div>
            </motion.div>

            {/* KARTA 2 (nakłada się na 1) */}
            <motion.div
                style={{ y: card2Y }}
                className="
          sticky top-0
          h-screen
          flex items-center justify-center
          z-20
        "
            >
                <div className="w-[300px] h-[400px] bg-blue-500 text-white flex items-center justify-center rounded-lg">
                    Card 2
                </div>
            </motion.div>

            {/* KARTA 3 (nakłada się na 2) */}
            <motion.div
                style={{ y: card3Y }}
                className="
          sticky top-0
          h-screen
          flex items-center justify-center
          z-30
        "
            >
                <div className="w-[300px] h-[400px] bg-green-500 text-white flex items-center justify-center rounded-lg">
                    Card 3
                </div>
            </motion.div>
        </div>
    );
}
