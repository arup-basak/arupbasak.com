import React from 'react';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next'

type About = {
  name: string,
  title: string,
  about: string
};

type HomeProps = {
  about: About;
};

const Home = ({ about }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>{about.name}</title>
      </Head>
      <div className='m-5'>
        <div className='text-9xl py-5 font-bold cursor-default'>
          {about.name.toUpperCase()}
        </div>
        <div className='text-3xl'>
          {about.title}
        </div>
        <div className='py-10 w-3/5 text-justify'>
          {about.about}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ about: About }> = async () => {
  const res = await fetch(`http://localhost:3000/api/about`);
  const about = await res.json();
  return {
    props: {
      about
    }
  };
};

export default Home;
