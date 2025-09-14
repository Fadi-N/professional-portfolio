import { motion } from 'motion/react';
import type { CSSProperties} from 'react';
import React, { forwardRef } from 'react';

interface Props extends React.ComponentPropsWithoutRef<typeof motion.div> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  disableAnimation?: boolean;
}

export const DefaultReveal = forwardRef<HTMLDivElement, Props>(
  (
    { className, children, delay = 0.1, duration = 0.75, transition: userTransition, style, disableAnimation, ...rest },
    ref
  ) => {
    const transition = {
      duration,
      delay,
      ...userTransition,
    };
    return (
      <motion.div
        ref={ref}
        initial={disableAnimation ? undefined : { y: 24, opacity: 0 }}
        whileInView={disableAnimation ? undefined : { y: 0, opacity: 1 }}
        viewport={disableAnimation ? undefined : { once: true, margin: '0px 0px -50px 0px' }}
        transition={disableAnimation ? undefined : transition}
        className={className}
        {...rest}
        style={style}
      >
        {children}
      </motion.div>
    );
  }
);

DefaultReveal.displayName = 'DefaultReveal';
