import React from 'react'
import ImageIcon from './ImageIcon'
import github_logo from '/public/github-logo.png'
import linkedin_logo from '/public/linkedin-logo.png'
import instagram_logo from '/public/instagram-logo.png'
import twitter_logo from '/public/twitter-logo.png'

const SocialMediaIcons = () => {
    return (
        <>
            <div className='flex flex-row justify-around'>
                <ImageIcon src={github_logo} href='https://github.com/arup-basak' alt='Github' />
                <ImageIcon src={linkedin_logo} href='https://www.linkedin.com/in/basak-arup/' alt='LinkidIn' />
                <ImageIcon src={instagram_logo} href='https://www.instagram.com/_arupbasak_/' alt='Instagram' />
                <ImageIcon src={twitter_logo} href='https://twitter.com/_arupbasak_' alt='Twitter' />
            </div>
        </>

    )
}

export default SocialMediaIcons