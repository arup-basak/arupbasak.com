import React from 'react'
import Input from '@/components/Input'
import Head from 'next/head'
import { useState } from 'react'


const contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handelSubmit = () => {
    alert("Will Updated Soon")
  }
  return (
    <>
      <Head>
        <title>Connect with me</title>
      </Head>
      <div className='grid grid-cols-[700px_1fr]'>
        <div className='text-6xl py-5 font-bold cursor-default max-w-[500px] m-auto'>
          CONNECT WITH ME
        </div>
        <div id="textarea" className='w-[100%]'>
          <Input type='text' id="name" placeholder='Name' value={name} />
          <Input type='email' id="email" placeholder='Email' value={email} />
          <div>

            <textarea
              className="w-full p-6 bg-gray-100 outline-none resize-none"
              rows={12}
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button 
            onClick={handelSubmit}
            className='bg-gray-200 p-4 my-4 float-right px-10'>
              Send Message
          </button>
        </div>
      </div>

    </>
  )
}

export default contact