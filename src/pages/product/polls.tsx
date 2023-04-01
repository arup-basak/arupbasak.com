import React from 'react'
import Head from 'next/head'
import PollCard from '@/components/PollCard'

const Polls = () => {
  return (
    <>
        <Head>
            <title>Polls</title>
        </Head>
        <div>Welcome to Polls</div>
        <div>
            <PollCard title="Arup Basak" percentage={60} />
            <PollCard title="Tanveer Ahamed" percentage={50} />
            <PollCard title="Rahul Majumdar" percentage={90} />
            <PollCard title="Aniket Gupta" percentage={30} />
        </div>
    </>
  )
}

export default Polls