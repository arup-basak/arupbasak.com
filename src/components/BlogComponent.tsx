import Link from 'next/link'
import React from 'react'

const BlogComponent = (props: {
    heading?: string,
    context?: string,
    link?: string
}) => {
  return (
    <div className='rounded-xl bg-gray-300 p-3 transition cursor-pointer'>
        <Link href={"/"}>
            <div>
                {/* {props.heading} */}
                Lorem ipsum
            </div>
            <div className='text-lg'>
                {/* {props.context} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis blanditiis nobis?
            </div>
        </Link>
    </div>
  )
}

export default BlogComponent