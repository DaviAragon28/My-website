import React from 'react'
import { NavLink } from 'react-router-dom'
import { WebContext } from '../../context/context'


export const ListMenu = () => {
    const { listPages, handleShowMenu } = React.useContext(WebContext)
  return (
    
        listPages.map(list => (
            <NavLink
                onClick={handleShowMenu}
                style={({ isActive }) => ({
                    color: isActive ? '#EAB308' : 'white'
                })}
                end
                key={list.page}
                to={`${list.route}`}
                className='hover:underline hover:text-yellow-500'>
                <li>{list.page}</li>
            </NavLink>
        ))
  )
}
