import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const ToSocialMedia = () => {
    return (
        <>
            <li>
                <a href='https://github.com/DaviAragon28' target='_blank'>
                    <FaGithub className='w-9 h-9' />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/david-aragon-462aa8238/" target="_blank">
                    <FaLinkedin className='w-9 h-9'/>
                </a>
            </li>
        </>

    )
}
