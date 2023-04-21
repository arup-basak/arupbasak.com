import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/interface/project'
import ProjectLinks from './ProjectLinks'

const MinimizeProjectComponent = (props: {
    project: Project
    handleClick: () => void
    index: number
}) => {
    return (
        <motion.div
            key={props.project._id}
            className='border-blue-400 border-2 p-2 m-2 rounded cursor-pointer'
            layoutId={props.index.toString()}
            onClick={props.handleClick}>
            <ProjectLinks links={props.project.links}/>
            <motion.div
                className='text-3xl'>
                {props.project.name}
            </motion.div>
            <motion.div
                className=''>
                {props.project.short_desc}
            </motion.div>
        </motion.div>
    )
}

export default MinimizeProjectComponent