import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { Blog } from '@/interface/blog';

interface PostProps {
  data: Blog;
}

const Post: NextPage<PostProps> = ({ data }) => {
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

export const getServerSideProps: GetServerSideProps<PostProps> = async (context) => {
  const { pid } = context.query;

  try {
    const response = await fetch(`https://arupbasak.com/api/blog/${pid}`);
    const responseData = await response.json();
    const data: Blog = responseData;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        data: {
          _id: "",
          heading: "",
          pid: "",
          data: "",
          time: "",
          writer: ""
        },
      },
    };
  }
};

export default Post;
