import React from 'react'

const Project = (props: {
    name: string,
    description: string
}) => {
  return (
    <div>
        <div>{props.name}</div>
        <div>{props.description}</div>
    </div>
  )
}

export default Project