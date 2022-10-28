import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { WebContext } from '../../context/context'
import { ListMenu } from '../ListMenu/ListMenu'
import { ToSocialMedia } from '../ToSocialMedia/ToSocialMedia'


export const Menu = () => {
    const { handleShowMenu, showMenu, listPages } = React.useContext(WebContext)

    return (
        <ul className={`flex flex-col fixed right-0 left-[200%] bottom-0 top-0 
            backdrop-blur-lg pt-10 transition-all ease-in ${showMenu && 'left-0 right-0 '} lg:hidden z-50`}>
            <li className='self-end pr-6'>
                <button onClick={handleShowMenu}>
                    <RiCloseLine className='w-8 h-8 text-yellow-500' />
                </button>
            </li>

            <div className='flex flex-col items-center gap-3 text-lg'>
                <ListMenu />

                <ToSocialMedia />
            </div>

        </ul>
    )
}
