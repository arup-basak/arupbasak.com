import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ImageIcon = (props: {
  src: StaticImageData,
  href: string,
  alt: string
  hoverEffect?: true | false
}) => {
  const size = 25;
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: {delay: 0.3}
      }}

      initial={{
        y: 150
      }}
      animate={{
        y: 0,
        transition: {delay: 0.2}
      }}
      className=''>
      <Link href={props.href} target="_blank">
        <Image src={props.src} alt={props.alt} height={size} width={size} />
      </Link>
    </motion.div>
  )
}

export default ImageIcon
