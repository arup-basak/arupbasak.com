import React from 'react';
import ProjectComponent from '@/components/ProjectComponent';
import Head from 'next/head';
import useSWR from 'swr';

interface Project {
  name: string;
  about: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Projects = () => {
  const { data, error, isLoading } = useSWR<Project[]>('/api/projects', fetcher);

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
    <>
      <Head>
        <title>
          Projects
        </title>
      </Head>
      <div className='grid grid-cols-3'>
        {data.map((project) => (
          <ProjectComponent key={project.name} name={project.name} description={project.about} />
        ))}
      </div>
    </>
  );
};

export default Projects;
