import Link from 'next/link'
import React from 'react'

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
    <div className='rounded-xl bg-gray-300 p-2 m-2 cursor-pointer'>
        <Link href={`blog/${props.blog.pid}`}>
            <div>
                {props.blog.heading}
            </div>
            <div className='text-lg'>
                {props.blog.data}
            </div>
        </Link>
    </div>
  )
}

export default BlogComponent