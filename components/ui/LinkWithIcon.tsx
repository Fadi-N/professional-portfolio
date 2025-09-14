import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import {FaArrowRight} from "react-icons/fa6";
import { twMerge } from 'tailwind-merge';


interface LinkWithIconProps {
    href: string;
    title: string;
    className?: string;
}

export function LinkWithIcon({ href, title, className }: LinkWithIconProps) {
    return (
        <Link href={href}>
            <motion.div
                className={twMerge('group flex items-center gap-2', className)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
            >
                <FaArrowRight
                    className={`-rotate-45 transform transition-all duration-300 group-hover:rotate-0 group-hover:text-[#74b5a5] lg:size-4`}
                />
                <p className="font-light group-hover:text-[#74b5a5] group-hover:underline">{title}</p>
            </motion.div>
        </Link>
    );
}