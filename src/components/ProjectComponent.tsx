import React from 'react'
import {motion} from 'framer-motion'

const ProjectComponent = (props: {
    name: string,
    description: string
}) => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
        scale: .5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {delay: 0.3}
      }}
      whileHover={{
        scale: 1.02
      }}
      className='grid grid-cols-4 grid-rows-auto gap-2 border-blue-400 border-2 p-2 m-2 rounded cursor-pointer'>
        <div>{props.name}</div>
        <div>{props.description}</div>
    </motion.div>
  )
}

export default ProjectComponent