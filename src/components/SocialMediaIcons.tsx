import React from 'react'
import ImageIcon from './ImageIcon'
import github_logo from '/public/github-logo.svg'
import linkedin_logo from '/public/linkedin-logo.svg'
import instagram_logo from '/public/instagram-logo.svg'
import twitter_logo from '/public/twitter-logo.svg'
import { motion } from 'framer-motion'

const SocialMediaIcons = () => {
    return (
        <motion.div
            initial={{
                y: 150
            }}
            animate={{
                y: 0,
                transition: { delay: 0.4 }
            }}
            className='flex flex-row justify-around'>
            <ImageIcon 
                src={github_logo} 
                href='https://github.com/arup-basak' 
                alt='Github' 
                hoverEffect={true} />
            <ImageIcon src={linkedin_logo} 
                href='https://www.linkedin.com/in/basak-arup/' 
                alt='LinkidIn' 
                hoverEffect={true} />
            <ImageIcon 
                src={instagram_logo} 
                href='https://www.instagram.com/_arupbasak_/' 
                alt='Instagram' 
                hoverEffect={true} />
            <ImageIcon 
                src={twitter_logo} 
                href='https://twitter.com/_arupbasak_' 
                alt='Twitter' 
                hoverEffect={true} />
        </motion.div>

    )
}

export default SocialMediaIcons