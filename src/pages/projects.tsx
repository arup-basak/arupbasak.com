import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head';
import MaximizeProjectComponent from '@/components/MaximizeProjectComponent';
import { Project, ProjectLink } from '@/interface/project';
import MinimizeProjectComponent from '@/components/MinimizeProjectComponent';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Projects = () => {
  const [selectedId, setSelectedId] = useState('')
  const [data, setData] = useState<Project[]>([])
  const [projectBlur, setProjectBlur] = useState(false)

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

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await fetch('/api/projects');
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    getBlog();
  }, []);

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
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 500: 3, 1200: 4 }}
          >
            <Masonry>
              {data.map((project, i) => (
                <MinimizeProjectComponent
                  project={project}
                  key={project._id}
                  index={i}
                  handleClick={() => handleProjectClick(i)} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
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
