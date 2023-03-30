import React from 'react'
import Link from 'next/link'

const NavButtons = (props: {
    href: string,
    innerText: string
}) => {
  return (
    <Link href={props.href}>
        <div 
          className={`styles.nav_buttons select-none mobile:py-1 mobile:px-3 desktop:p-12 w-fit transition
                      cursor-pointer mobile:text-base desktop:text-2xl
                      desktop:after:content-['→'] desktop:after:absolute desktop:after:opacity-0 desktop:hover:after:opacity-100 desktop:animate-slow-move
                   `}
          >
            {props.innerText.toUpperCase()}
        </div>
    </Link>
  )
}
 
export default NavButtons