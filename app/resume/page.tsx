import React from 'react';
import Image from "next/image";

const ResumePage = () => {
    return (
        <div className="resume">
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