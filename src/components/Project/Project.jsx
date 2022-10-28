import React from 'react'

export const Project = () => {
    return (
        <div className='w-60 h-auto bg-gray-200 text-black flex flex-col gap-2 
            pb-2 rounded-md overflow-hidden hover:translate-x-1 
            hover:translate-y-3 transition-all'>
            <div>
                <img className='w-full object-cover cursor-pointer'
                    src="https://i.im.ge/2022/10/14/2DFky0.google2.png" alt="" />
            </div>
            <div className='flex flex-col gap-2 px-2'>
                <h2 className='text-xl font-bold'>Travel</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, 
                    quibusdam impedit totam neque inventore nihil rerum!
                </p>
            </div>

        </div>
    )
}
