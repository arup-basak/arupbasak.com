import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/interface/project'
import cancel_icon from '/public/cancel-icon.png'
import Image from 'next/image'

const MaximizeProjectComponent = (props: {
    project: Project,
    onClick: () => void
}) => {
    return (
        <div className='border-blue-500 border-2 p-2 rounded'>
            <motion.div
                whileHover={{
                    // scale: 1.2,
                    // transition: { delay: 0.3 }
                }}
                className='cursor-pointer'
                onClick={() => props.onClick()}>
                <Image src={cancel_icon} alt={'cancel-icon'} height={24} width={24} />
            </motion.div>
            <motion.h5>{props.project.name}</motion.h5>
            <motion.h2>{props.project.long_desc}</motion.h2>
        </div>
    )
}

export default MaximizeProjectComponent