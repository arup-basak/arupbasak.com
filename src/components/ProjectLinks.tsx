import React from 'react'
import { ProjectLink } from '@/interface/project'
import Link from 'next/link'
import github_logo from '/public/github-logo.png'
import browser_icon from '/public/browser-icon.png'
import playstore_logo from '/public/playstore-logo.png'
import ImageIcon from './ImageIcon'

const ProjectLinks = ({links}: { links: ProjectLink }) => {
    const hw = 24
    return (
        <div className='flex justify-around'>
            <ImageIcon 
                src={browser_icon} 
                alt={'browser_icon'}
                hoverEffect={true} 
                href={links.hosted_site}
                hidden={links.hosted_site ? false : true}
                />
            <ImageIcon 
                src={playstore_logo} 
                alt={'playstore'}
                hoverEffect={true} 
                href={links.playstore}
                hidden={links.playstore ? false : true}
                size={22}
                />
            <ImageIcon 
                src={github_logo} 
                alt={'github'}
                hoverEffect={true} 
                href={links.github}
                hidden={links.github ? false : true}
                />
        </div>
    )
}

export default ProjectLinks