import React, { useState } from 'react'
import Input from '@/components/Input'
import Head from 'next/head'
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from 'firebase/firestore'
// import Alert from '@/components/Alert';


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
  const [nameTxt, setName] = useState('') 
  const [emlTxt, setEmail] = useState('') 
  const [textareaText, setTextarea] = useState('')

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleClick = () => {
    try {
      addDoc(collection(db, 'messages'), {
        name: nameTxt,
        email: emlTxt,
        message: textareaText,
        time: new Date().toString()
      }).catch((e) => {
        console.log(e);
      }).then(
        () => {
          setName('')
          setEmail('')
          setTextarea('')
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
      {/* <Alert message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dignissimos ipsa alias."/> */}
      
      <div className='desktop:grid desktop:grid-cols-[700px_1fr]'>
        <div className='mobile:text-2xl desktop:text-6xl desktop:py-5 font-bold cursor-default max-w-[500px] m-auto'>
          CONNECT WITH ME
        </div>
        <div id="textarea" className='w-[100%]'>
          <input type="hidden" name="access_key" value="3146127c-ede8-4857-afdc-b4910ca75eb1" />
          <Input type='text' id="name" placeholder='Name' value={nameTxt} />
          <Input type='email' id="email" placeholder='Email' value={emlTxt} />
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