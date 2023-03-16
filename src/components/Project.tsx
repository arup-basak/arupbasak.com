import React from 'react'
import playstore_logo from 'public/playstore-logo.png'
import github_logo from 'public/github-logo.png'
import browser_logo from 'public/browser-logo.png'
import ImageIcon from './ImageIcon'

interface ProjectProps {
    heading: string,
    description: string,
    github?: string,
    playstore?: string,
    browser?: string
}

const Project = (props: ProjectProps) => {
    return (
        <div className='p-5 bg-gray-200 border-2 border-gray-400 mobile:rounded desktop:rounded-xl min-h-[24rem] desktop:hover:scale-[1.04] transition desktop:hover:shadow-2xl mobile:shadow shadow-grey'>
            <div className='flex justify-between px-6 py-3'>
                <ImageIcon src={github_logo} href="" alt="" />
                <ImageIcon src={playstore_logo} href="" alt="" />
                <ImageIcon src={browser_logo} href="" alt="" />
            </div>
            <div className='font-bold mobile:text-xl'>
                {props.heading}
            </div>
            <div className='text-justify text-base'>
                {props.description}
            </div>
        </div>
    )
}

export default Project