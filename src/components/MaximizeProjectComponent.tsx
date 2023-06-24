import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/interface/project'
import cancel_icon from '/public/cancel-icon.svg'
import ImageIcon from './ImageIcon'

const MaximizeProjectComponent = (props: {
    project: Project,
    onClick: () => void
}) => {
    return (
        // <div className='fixed flex justify-center h-screen w-full'>
            <div className='border-blue-500 border-2 p-2 rounded w-fit h-fit'>
                <ImageIcon
                    src={cancel_icon}
                    alt={'cancel-icon'}
                    hoverEffect={false}
                    onClick={props.onClick}
                    className='cursor-pointer'
                />
                <motion.h5>{props.project.name}</motion.h5>
                <motion.h2>{props.project.long_desc}</motion.h2>
            </div>
        //  </div>
    )
}

export default MaximizeProjectComponent