import React from 'react';
import Navbar from "@/components/ui/layout/navigation/navbar";
import {twMerge} from "tailwind-merge";


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
