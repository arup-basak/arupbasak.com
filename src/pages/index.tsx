import React from 'react';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Project from '@/components/Project';

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
      <div className=''>
        <div className="m-5 h-screen" id="div">
          <div className='absolute right-0 top-0'>
          </div>
          <div className='mobile:text-7xl desktop:text-8xl py-5 font-bold cursor-default'>
            {about.name.toUpperCase()}
          </div>
          <div className='mobile:text-2xl desktop:text-3xl'>
            {about.title}
          </div>
          <div className='py-10 desktop:w-4/5 text-justify'>
            {about.about}
          </div>
        </div>
      </div>
      <div className='grid mobile: grid-cols-1 desktop:grid-cols-4 gap-3 mobile:w-4/5 desktop:w-3/5 m-auto'>
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
        <Project
          heading={"Numlify"}
          description={"Numlify is a simple app that converts numbers to words and stores the results in an SQLite database."}
        />
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