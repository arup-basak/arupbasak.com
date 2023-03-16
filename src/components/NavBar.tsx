import React from 'react'
import NavButtons from './NavButtons'
import SocialMediaIcons from './SocialMediaIcons'

const NavBar = () => {
  return (
    <div className='h-screen flex desktop:flex-col mobile:flex-row justify-between bg-gray-200'>
      <div className='flex flex-col my-6'>
        <NavButtons innerText='home' href='/'/>
        <NavButtons innerText='blogs' href='/blogs'/>
        <NavButtons innerText='contact' href='/contact'/>
      </div>
      <div className='p-5'>
        <SocialMediaIcons />
      </div>
    </div>
  )
}

export default NavBar