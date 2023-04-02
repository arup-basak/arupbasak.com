import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Project from '@/components/Project';
import Head from 'next/head';

const data = [
  {
    "id": 0,
    "name": "Numlify",
    "description": "This is a App that converts number to words",
    "full-description": "This is a App that converts number to words",
    "links": [
      { "github": "aa" },
      { "playstore": "aa" }
    ]
  },
  {
    "id": 1,
    "name": "Numlify1",
    "description": "This is a App that converts number to words",
    "full-description": "This is a App that converts number to words",
    "links": [
      { "github": "aa" },
      { "playstore": "aa" }
    ]
  },
  {
    "id": 2,
    "name": "Numlify2",
    "description": "This is a App that converts number to words",
    "full-description": "This is a App that converts number to words",
    "links": [
      { "github": "aa" },
      { "playstore": "aa" }
    ]
  }
]

const Projects = () => {
  const [selectedId, setSelectedId] = useState(0)

  return (
    <>
      <Head>
        <title>
          Projects
        </title>
      </Head>
      {data.map(elem => {
        return (
          <motion.div onClick={() => setSelectedId(elem.id)}>
            <div>{elem.name}</div>
            <div>{elem.description}</div>
          </motion.div>
        )
      })}
      <AnimatePresence>
        {selectedId && <motion.div layoutId={selectedId.toString()}>
          <motion.div>{data[selectedId]['name']}</motion.div>
          <motion.div>{data[selectedId]['full-description']}</motion.div>
          <motion.button onClick={() => setSelectedId(-1)} />
        </motion.div>}
      </AnimatePresence>
    </>
  );
};

export default Projects;