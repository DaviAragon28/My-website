import React from 'react'
import me from '../../assets/me.webp'

export const Home = () => {
  return (
    <div className='flex flex-col w-full items-center m-auto p-6 pt-16 lg:pt-40  lg:flex-row lg:w-1/2 gap-10'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl font-bold animate-bounce '>Hi, there!</h1>
        <p className='text-xl'>I'm <span className='text-yellow-500'>David Aragón</span>, who has knowledge in Frontend Development.</p>
      </div>
      <div>
        <img className='lg:w-full h-full' src={me} alt="" />
      </div>
    </div>
  )
}
