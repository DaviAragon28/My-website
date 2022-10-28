import React from 'react'
import { Project } from '../components/project/project'



export const ContainerProjects = () => {
  return (
    <div className='grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
    </div>
  )
}
