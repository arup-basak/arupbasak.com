import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head';
import useSWR from 'swr';
import MaximizeProjectComponent from '@/components/MaximizeProjectComponent';
import { Project } from '@/interface/project';
import MinimizeProjectComponent from '@/components/MinimizeProjectComponent';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Projects = () => {
  const [selectedId, setSelectedId] = useState('')
  const [projectBlur, setProjectBlur] = useState(false)

  const { data, error, isLoading } = useSWR<Project[]>('/api/projects', fetcher);

  const handleProjectClick = (i: number) => {
    if (selectedId == '') {
      setProjectBlur(true)
      setSelectedId(i.toString())
    }
  }

  const handleProjectExitClick = () => {
    if (selectedId != '') {
      setProjectBlur(false)
      setSelectedId('')
    }
  }

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
        <b className='text-red-500'>Currently On Testing</b>
        <div className=''>
          <div className={`grid grid-cols-3 ${projectBlur ? 'opacity-5' : 'opacity-100'}`}>
            {data.map((project, i) => (
              <MinimizeProjectComponent 
                project={project} 
                key={project._id} 
                index={i}
                handleClick={() => handleProjectClick(i)} />
            ))}
          </div>
          <AnimatePresence>
            {selectedId != '' && (
              <motion.div layoutId={selectedId}>
                <MaximizeProjectComponent
                  project={data[parseInt(selectedId)]}
                  onClick={() => handleProjectExitClick()} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    </>

  );
};

export default Projects;
