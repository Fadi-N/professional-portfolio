import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    skipContainer?: boolean;
    skipPadding?: boolean;
}

export const Section = forwardRef<HTMLDivElement, Props>(
    ({ className, skipPadding, skipContainer, children, ...restProps }, ref) => {
        return (
            <section
                ref={ref}
                className={twMerge(!skipContainer && 'container mx-auto px-4 lg:px-8', !skipPadding && 'pb-16 lg:pb-28', className)}
                {...restProps}
            >
                {children}
            </section>
        );
    }
);

Section.displayName = 'Section';
