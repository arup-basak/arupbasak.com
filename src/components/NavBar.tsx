import React from 'react'
import NavButtons from './NavButtons'
import SocialIcon  from './SocialIcon'
import github_logo from '/public/github-logo.png'
import linkedin_logo from '/public/linkedin-logo.png'
import instagram_logo from '/public/instagram-logo.png'
import twitter_logo from '/public/twitter-logo.png'

const NavBar = () => {
  return (
    <div className='w-fit h-screen flex flex-col justify-between'>
      <div>
        <NavButtons innerText='home' href='/'/>
        <NavButtons innerText='blogs' href='/blogs'/>
        <NavButtons innerText='contact' href='/contact'/>
      </div>
      <div className='flex flex-row justify-around m-10'>
        <SocialIcon src={github_logo} href='https://github.com/arup-basak' alt='Github'/>
        <SocialIcon src={linkedin_logo} href='https://www.linkedin.com/in/basak-arup/' alt='LinkidIn'/>
        <SocialIcon src={instagram_logo} href='https://www.instagram.com/_arupbasak_/' alt='Instagram'/>
        <SocialIcon src={twitter_logo} href='https://twitter.com/_arupbasak_' alt='Twitter'/>
      </div>
    </div>
  )
}

export default NavBar