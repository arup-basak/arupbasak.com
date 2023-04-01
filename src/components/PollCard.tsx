import React from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const PollCard = (props: {
    title: string,
    percentage: number
}) => {
    const progress = useRef(0);
    return (
        <motion.div 
            whileHover={{
                scale: 1.005,
                transition: {duration: 0.2}
            }}
            className='bg-slate-200 p-2 rounded-lg my-2 cursor-pointer'>
            <div>{props.title}</div>
            <motion.div 
                initial={{width: 0}}
                animate={{width: props.percentage + '%'}} 
                className='h-1 rounded bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'
            ></motion.div>
            <div>{props.percentage + '%'}</div>
        </motion.div>
    )
}

export default PollCard
