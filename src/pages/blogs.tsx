import React from 'react'
import Head from 'next/head'
import useSWR from 'swr';
import BlogComponent from '@/components/BlogComponent';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Blog {
  _id: any,
  heading: string,
  pid: string,
  data: string,
  time: string,
  writer: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Blogs() {
  const { data, error, isLoading } = useSWR<Blog[]>('/api/blogs', fetcher);

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>Error</>
  }

  if (!data) {
    return <>No data found.</>
  }

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
          {data.map((item, i) => {
            return <BlogComponent blog={item} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}


export default Blogs