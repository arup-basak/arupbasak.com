import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectComponent from '@/components/ProjectComponent';
import Head from 'next/head';

interface Project {
  name: string,
  github: string,
  about: string
}

interface ProjectsProps {
  projects: Array<Project>
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Head>
        <title>
          Projects
        </title>
      </Head>
      <div className='grid grid-cols-3'>
        {/* {
          projects.map((project, i) => {
            return <>
              <ProjectComponent name={project.name} description={project.about} key={i} />
            </>
          })
        } */}
        No Data available
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const postsResponse = await fetch("http://localhost:3000/api/projects");
  const projects = await postsResponse.json();
  return {
    props: {
      projects
    },
  }
}




export default Projects;