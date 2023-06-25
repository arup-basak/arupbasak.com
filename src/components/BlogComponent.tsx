import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

interface Blog {
  _id: any,
  heading: string,
  pid: string,
  data: string,
  time: string,
  writer: string
}

const BlogComponent = (props: {
  blog: Blog
}) => {
  return (
    <motion.div 
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: .98
      }}
      className='rounded-xl bg-gray-300 p-2 m-2 cursor-pointer'>
      <Link href={`blog/${props.blog.pid}`}>
        <div>
          {props.blog.heading}
        </div>
        <div className='text-lg'>
          {props.blog.data}
        </div>
      </Link>
    </motion.div>
  )
}

export default BlogComponent