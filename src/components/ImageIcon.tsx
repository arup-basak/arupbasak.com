import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const ImageIcon = (props: {
    src: StaticImageData,
    href: string,
    alt: string
    hoverEffect?: true|false
}) => {
  const size = 25;
  return (
    <div className='hover:scale-[1.10] transition'>
        <Link href={props.href} target="_blank">
            <Image src={props.src} alt={props.alt} height={size} width={size}/>
        </Link>
    </div>
  )
}

export default ImageIcon
