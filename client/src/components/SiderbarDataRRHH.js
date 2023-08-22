import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as BiICons from "react-icons/bi"

export const SidebarData = [
    {
        title:'Inicio',
        path:'/recursosh',
        icon: <FaIcons.FaHouseUser/>,
        cName:'nav-text1'
    },
    
    {
        title:'Cerrar Sesión',
        path:'/',
        icon: <BiICons.BiExit/>,
        cName:'nav-text1'
    },
]
