import React from 'react'
import NavButtons from './NavButtons'
import SocialMediaIcons from './SocialMediaIcons'

const NavBar = () => {
  return (
    <div className='mobile:h-fit mobile:w-full desktop:h-screen desktop:w-fit desktop:px-3 flex flex-col justify-between bg-gray-200'>
      <div className='flex mobile:flex-row desktop:flex-col desktop:my-6 mobile:my-3 justify-between'>
        <NavButtons innerText='home' href='/'/>
        <NavButtons innerText='blogs' href='/blogs'/>
        <NavButtons innerText='contact' href='/contact'/>
      </div>
      <div className='p-5 mobile:hidden desktop:block'>
        <SocialMediaIcons />
      </div>
    </div>
  )
}

export default NavBar