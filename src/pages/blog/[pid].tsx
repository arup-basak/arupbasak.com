import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Blog } from '@/interface/blog'

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [data, setData] = useState<Blog>({
    _id: "string",
    heading: "string",
    pid: "string",
    data: "string",
    time: "string",
    writer: "string"
  });

  useEffect(() => {
    const sendReq = async () => {
      try {
        const response = await fetch(`/api/blog/${pid}`);
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData)
      } catch (error) {
        console.log(error);
      }
    };

    sendReq();
  }, [pid]);

  return (
    <>
      <Head>
        <title>{data.heading}</title>
      </Head>
      <div className='text-justify desktop:w-3/5 mobile:w-4/5 m-auto'>
        {data.data}
      </div>
    </>
  );
};

export default Post;
