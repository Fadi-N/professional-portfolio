import React from 'react';
import {twMerge} from "tailwind-merge";

import Navbar from "@/components/ui/layout/navigation/navbar";


interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Layout= ({
                                                   children,
                                                   className,
                                               }: Props) => {
    return (
        <main className={twMerge('relative', className)}>
            <Navbar />
            {children}
        </main>
    );
};
