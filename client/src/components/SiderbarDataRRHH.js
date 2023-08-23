import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as BiICons from "react-icons/bi"
import * as PiICons from "react-icons/pi"

export const SidebarData = [
    {
        title:'Inicio',
        path:'/answerRRHH',
        icon: <FaIcons.FaHouseUser/>,
        cName:'nav-text1'
    },
    {
        title:'Postulantes',
        path:'/recursosh',
        icon: <PiICons.PiUsersFourBold/>,
        cName:'nav-text1'
    },
    {
        title:'Cerrar Sesión',
        path:'/',
        icon: <BiICons.BiExit/>,
        cName:'nav-text1'
    },
]
