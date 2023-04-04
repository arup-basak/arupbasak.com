import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const example = () => {

    const tableStruct = `
    | heading | b  |  c |  d  |
    | - | :- | -: | :-: |
    | cell 1 | cell 2 | 3 | 4 | 
    `;
    return (
        <>
            <ReactMarkdown remarkPlugins={[gfm]}>Hello</ReactMarkdown>
        </>
    )
}

export default example