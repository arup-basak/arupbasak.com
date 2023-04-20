import React from 'react'
import { motion } from 'framer-motion'

const MaximizeProjectComponent = (props: {
    project: Project,
    onClick: () => void
}) => {
    return (
        <div className=''>
            <motion.h5>{props.project.name}</motion.h5>
            <motion.h2>{props.project.long_desc}</motion.h2>
            <motion.button 
                onClick={() => props.onClick}>exit</motion.button>
        </div>
    )
}

export default MaximizeProjectComponent