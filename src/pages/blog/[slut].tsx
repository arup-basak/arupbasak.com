import { useRouter } from 'next/router'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const data2 = "`choco install mingw`"

const data =`
# Easiest Way to Install a C/C++ Compiler on Your System

C/C++ has many compiler, but MinGW(Minimalist GNU for Windows) is famous compiler. While there are many compilers available for these languages, MinGW is a popular choice for Windows users.

The Process:
- Open Terminal as Administration
- Install [Chocolatey](https://chocolatey.org/)
- Use Chocolatey to install MinGW

#### Open Terminal as Administration

Open start menu on Windows and search PowerShell, Right-Click on it and Click “Run as Administration”

#### Install Chocolatey on Terminal

Paste this line and click enter to Install Chocolatey

Your Chocolatey is Installed.
#### Install MinGW using Chocolatey

Don’t close the PowerShell Window and paste the above line

${data2}

Press ‘Y’ to start the installation of MinGW.

After installation close the PowerShell window.

Wallah, Your MinGW is installed, no need to setup Environmental variables
`



const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <Head>
        <title>{pid}</title>
      </Head>
      <div className='text-justify desktop:w-3/5 mobile:w-4/5 m-auto text-red-500'>
        Currently All are in Testing
        {/* <ReactMarkdown remarkPlugins={[gfm]}>
          {data}
        </ReactMarkdown> */}
      </div>
    </>
  )
}

export default Post
