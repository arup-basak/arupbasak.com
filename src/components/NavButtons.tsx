import React from 'react'
import Link from 'next/link'

const NavButtons = (props: {
    href: string,
    innerText: string
}) => {
  return (
    <Link href={props.href}>
        <div 
          className={`styles.nav_buttons select-none p-12 w-fit transition
                      cursor-pointer text-2xl
                      after:content-['→'] after:absolute after:opacity-0 hover:after:opacity-100 animate-slow-move
                   `}
          >
            {props.innerText.toUpperCase()}
        </div>
    </Link>
  )
}
 
export default NavButtons