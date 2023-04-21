import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head';
import useSWR from 'swr';
import MaximizeProjectComponent from '@/components/MaximizeProjectComponent';
import { Project } from '@/interface/project';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Projects = () => {
  const [selectedId, setSelectedId] = useState('0')
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
      <>
        <b>Currently On Testing</b>
        {/* <div className='grid grid-cols-3'>
          {data.map((project, i) => (
            <motion.div
              key={i}
              className='border-blue-400 border-2 p-2 m-2 rounded cursor-pointer'
              layoutId={i.toString()}
              onClick={() => setSelectedId(i.toString())}>
              <motion.h5>{project.name}</motion.h5>
              <motion.h2>{project.short_desc}</motion.h2>
            </motion.div>
          ))}
          {/* <AnimatePresence>
            {selectedId == '' && (
              <motion.div layoutId={selectedId}>
                <MaximizeProjectComponent project={data[parseInt(selectedId)]} onClick={() => setSelectedId('')} />
              </motion.div>
            )}
          </AnimatePresence> 
        </div> */}
      </>
    </>
  );
};

export default Projects;
