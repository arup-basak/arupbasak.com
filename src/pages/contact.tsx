import React, { useState, useRef } from 'react'
import Input from '@/components/Input'
import Head from 'next/head'
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCscF57LNQsU7Aj0Ncxl6dyBk4IFDpg2KY",
  authDomain: "arupbasak-co-in.firebaseapp.com",
  projectId: "arupbasak-co-in",
  storageBucket: "arupbasak-co-in.appspot.com",
  messagingSenderId: "934678173562",
  appId: "1:934678173562:web:72ab0eb59ee87a412168c3",
  measurementId: "G-2NXMRGBJ58"
};


const Contact = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const name = useRef('')
  const email = useRef('')

  const [textareaText, setTextarea] = useState('')

  const handleClick = () => {
    try {
      addDoc(collection(db, 'messages'), {
        name: name.current,
        email: email.current,
        message: textareaText,
        time: new Date().toString()
      }).catch((e) => {
        console.log(e);
      }).then(
        () => {
          alert("Message Sending Successful");
        }
      );
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Head>
        <title>Connect with me</title>
      </Head>
      <div className='desktop:grid desktop:grid-cols-[700px_1fr]'>
        <div className='mobile:text-2xl desktop:text-6xl desktop:py-5 font-bold cursor-default max-w-[500px] m-auto'>
          CONNECT WITH ME
        </div>
        <div id="textarea" className='w-[100%]'>
          <Input type='text' id="name" placeholder='Name' onChange={(value) => name.current = value} />
          <Input type='email' id="email" placeholder='Email' onChange={(value) => email.current = value} />
          <div>
            <textarea
              className="w-full p-6 bg-gray-100 outline-none resize-none"
              rows={12}
              placeholder="Enter your message here..."
              onChange={(e) => setTextarea(e.target.value)}
              value={textareaText}
              required
            />
          </div>
          <button
            onClick={handleClick}
            className='bg-gray-200 p-4 my-4 float-right px-10'>
            Send Message
          </button>
        </div>
      </div>
    </>
  )
}

export default Contact