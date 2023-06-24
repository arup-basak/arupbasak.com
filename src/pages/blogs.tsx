import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import BlogComponent from '@/components/BlogComponent';
import { Blog } from '@/interface/blog';

const Blogs = () => {
  const [data, setData] = useState<Blog[]>([])

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await fetch('/api/blogs');
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    getBlog();
  }, []);

  return (
    <div className=''>
      <Head>
        <title>
          Blogs
        </title>
      </Head>
      <div className='flex flex-col'>
        All Data are currently testing
        <div className='grid desktop:grid-cols-2 mobile:grid-cols-1'>
          {data.map((item: Blog) => (
            <BlogComponent blog={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  )
}


export default Blogs