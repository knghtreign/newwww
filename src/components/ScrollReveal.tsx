import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

export interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  animation?: 'slide-up' | 'slide-down' | 'pop-up' | 'fade-up' | 'fade' | 'pop';
  distance?: number;
  duration?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'slide-up',
  distance,
  duration = 0.85,
  once = false, // false enables animation both on scroll down and scroll back up!
  ...props
}) => {
  const smoothEase = [0.16, 1, 0.3, 1] as const;
  const springEase = [0.175, 0.885, 0.32, 1.15] as const;

  const getVariants = () => {
    switch (animation) {
      case 'slide-down':
        return {
          initial: { opacity: 0, y: -(distance ?? 40) },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            duration,
            delay: delay / 1000,
            ease: smoothEase,
          },
        };
      case 'pop-up':
      case 'pop':
        return {
          initial: { opacity: 0, scale: 0.85, y: distance ?? 22 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          transition: {
            duration: duration * 0.95,
            delay: delay / 1000,
            ease: springEase,
          },
        };
      case 'fade-up':
        return {
          initial: { opacity: 0, y: distance ?? 32 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            duration,
            delay: delay / 1000,
            ease: smoothEase,
          },
        };
      case 'fade':
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: {
            duration: duration * 0.9,
            delay: delay / 1000,
            ease: 'easeOut' as const,
          },
        };
      case 'slide-up':
      default:
        return {
          initial: { opacity: 0, y: distance ?? 52 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            duration,
            delay: delay / 1000,
            ease: smoothEase,
          },
        };
    }
  };

  const v = getVariants();

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.whileInView}
      transition={v.transition}
      viewport={{ once, amount: 0.12 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideUp: React.FC<Omit<ScrollRevealProps, 'animation'>> = (props) => (
  <ScrollReveal animation="slide-up" {...props} />
);

export const SlideDown: React.FC<Omit<ScrollRevealProps, 'animation'>> = (props) => (
  <ScrollReveal animation="slide-down" {...props} />
);

export const PopUp: React.FC<Omit<ScrollRevealProps, 'animation'>> = (props) => (
  <ScrollReveal animation="pop-up" {...props} />
);

export const FadeUp: React.FC<Omit<ScrollRevealProps, 'animation'>> = (props) => (
  <ScrollReveal animation="fade-up" {...props} />
);
