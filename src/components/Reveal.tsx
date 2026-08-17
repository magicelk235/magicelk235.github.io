import type { ReactNode } from 'react';
import AnimatedContent from '../reactbits/AnimatedContent';
import { useReducedMotion } from '../hooks/useReducedMotion';

type Props = {
  children: ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  delay?: number;
  duration?: number;
  className?: string;
};

/**
 * Entrance wrapper. Content is in the DOM either way: under reduced motion the
 * children render straight through, so nothing is ever gated behind a tween.
 */
export default function Reveal({
  children,
  distance = 40,
  direction = 'vertical',
  reverse = false,
  delay = 0,
  duration = 0.7,
  className,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <AnimatedContent
      className={className}
      distance={distance}
      direction={direction}
      reverse={reverse}
      duration={duration}
      delay={delay}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.15}
    >
      {children}
    </AnimatedContent>
  );
}
