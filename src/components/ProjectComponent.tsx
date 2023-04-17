import React from 'react'
import {motion} from 'framer-motion'

const ProjectComponent = (props: {
    name: string,
    description: string
}) => {
  return (
    <motion.div 
      className='grid grid-cols-4 grid-rows-auto gap-2 bg-red-400 p-2 m-2'>
        <div>{props.name}</div>
        <div>{props.description}</div>
    </motion.div>
  )
}

export default ProjectComponent