import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const SocialIcon = (props: {
    src: StaticImageData,
    href: string,
    alt: string
}) => {
  const size = 25;
  return (
    <div>
        <Link href={props.href} target="_blank">
            <Image src={props.src} alt={props.alt} height={size} width={size}/>
        </Link>
    </div>
  )
}

export default SocialIcon
