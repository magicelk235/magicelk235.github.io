import TiltedCard from '../reactbits/TiltedCard';
import { useFinePointer, useReducedMotion } from '../hooks/useReducedMotion';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Frame aspect. Columns share one value so their captions start at the same y. */
  aspect: string;
};

/**
 * Screenshot in a hairline frame. On a fine pointer it takes a few degrees of
 * tilt; on touch or under reduced motion it is a plain image.
 */
export default function Framed({ src, alt, width, height, aspect }: Props) {
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const tilt = fine && !reduced;

  return (
    <div
      className="overflow-hidden rounded-sharp border border-rule bg-panel"
      style={{ aspectRatio: aspect }}
    >
      {tilt ? (
        <TiltedCard
          imageSrc={src}
          altText={alt}
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={5}
          scaleOnHover={1.03}
          showMobileWarning={false}
          showTooltip={false}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      )}
    </div>
  );
}
