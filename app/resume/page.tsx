import React from 'react';
import Image from "next/image";

const ResumePage = () => {
    return (
        <div className="p-4 md:p-0 lg:h-[calc(100vh-6rem)] xl:h-[calc(100vh-7.5rem)] 2xl:h-[calc(100vh-9rem)]">
            <div className="flex items-center justify-center h-full">
                <Image
                    src="/resume.png"
                    alt="resume"
                    width={600}
                    height={850}
                />
            </div>
        </div>
    );
};

export default ResumePage;