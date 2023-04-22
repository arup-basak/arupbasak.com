import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

interface ImageIconProps {
  src: StaticImageData;
  href?: string;
  alt?: string;
  hoverEffect?: boolean;
  size?: number;
  motionProps?: MotionProps;
  hidden?: boolean,
  className?: string
  onClick?: () => void
}

const ImageIcon: React.FC<ImageIconProps> = ({
  src,
  href,
  alt = '',
  className = '',
  hoverEffect = true,
  size = 25,
  hidden = false,
  motionProps = {},
  onClick
}) => {
  const linkContent = href ? (
    <Link href={href} target="_blank">
      <Image
        src={src}
        alt={alt}
        height={size}
        width={size}
        className={className}
        onClick={onClick} />
    </Link>
  ) : (
    <Image
      src={src}
      alt={alt}
      height={size}
      width={size}
      className={className}
      onClick={onClick} />
  );

  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
            scale: 1.2,
            transition: { delay: 0.3 },
          } : {}
      }
      {...motionProps}
      className={`${hidden ? 'hidden' : 'block'}`}
    >
      {linkContent}
    </motion.div>
  );
};

export default ImageIcon;
