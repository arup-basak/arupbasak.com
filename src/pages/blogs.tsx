import React from 'react'
import BlogComponent from '@/components/BlogComponent'
import Head from 'next/head'

function blogs() {
  return (
    <div className='grid grid-cols-6 gap-3 px-2'>
      <Head>
        <title>
          Blogs
        </title>
      </Head>
      {/* <BlogComponent /> */}
      Will Updated Soon
    </div>
  )
}

export default blogs