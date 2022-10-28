import React, { useContext } from 'react'
import { WebContext } from '../../context/context';
import { FaBars } from "react-icons/fa";
import { ListMenu } from '../ListMenu/ListMenu';
import { ToSocialMedia } from '../ToSocialMedia/ToSocialMedia';


export const Header = () => {
    const { handleShowMenu} = useContext(WebContext)


    return (
        <>
            <nav className='flex justify-between px-4 py-4  border-b border-yellow-200 rounded-ms  items-center lg:justify-around '>
                <ul>
                    <li className='text-yellow-500'>David Aragón</li>
                </ul>
                <ul>
                    <li  className='hidden lg:flex lg:gap-8'>
                        <ListMenu />
                    </li>
                </ul>
                <ul className='hidden lg:flex lg:gap-4 '>
                    <ToSocialMedia />
                </ul>
                <ul className='lg:hidden'>

                    <button onClick={handleShowMenu} >
                        <FaBars className='w-6 h-6' />
                    </button>
                </ul>
            </nav>
        </>
    )
}
