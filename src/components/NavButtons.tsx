import React from 'react'
import Link from 'next/link'

const NavButtons = (props: {
    href: string,
    innerText: string
}) => {
  return (
    <Link href={props.href}>
        <div className='select-none m-14 p-2 w-fit transition hover:bg-red-500 cursor-pointer text-2xl'>
            {props.innerText.toUpperCase()}
        </div>
    </Link>
  )
}
 
export default NavButtons