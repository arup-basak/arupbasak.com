import React from 'react'
import Link from 'next/link'

const NavButtons = (props: {
    href: string,
    innerText: string
}) => {
  return (
    <Link href={props.href}>
        <div 
          className={`styles.nav_buttons select-none m-14 p-2 px-10 w-fit transition
                   hover:bg-gray-200 cursor-pointer text-2xl
                    after:content-['→'] after:absolute after:opacity-0 hover:after:opacity-100 animate-slow-move
                   `}
          id='nav_buttons'
          >
            {props.innerText.toUpperCase()}
        </div>
    </Link>
  )
}
 
export default NavButtons