import React, {useState} from 'react'

const WebContext = React.createContext({})


const WebProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    
    const handleShowMenu = () => {
        setShowMenu(!showMenu)

    }

    const listPages = [
        {
            page: 'Home',
            route: '/'
        },
        {
            page: 'About me',
            route: '/about'
        },
        {
            page: 'Projects',
            route: '/projects'
        }
    ] 

    return (
        <WebContext.Provider value={{ showMenu, handleShowMenu, listPages}}>
            {children}
        </WebContext.Provider>
    )
}

export { WebContext, WebProvider}