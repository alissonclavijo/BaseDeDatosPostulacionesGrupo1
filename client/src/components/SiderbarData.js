import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as RiICons from "react-icons/ri"
import * as BiICons from "react-icons/bi"
import * as LuICons from "react-icons/lu"

export const SidebarData = [
    {
        title:'Inicio',
        path:'/homepost',
        icon: <FaIcons.FaHouseUser/>,
        cName:'nav-text'
    },
    {
        title:'Información del Postulante',
        path:'/InforPost',
        icon: <RiICons.RiFileUserFill/>,
        cName:'nav-text'
    },
    {
        title:'Postulación',
        path:'/postulacion',
        icon: <LuICons.LuMousePointerClick/>,
        cName:'nav-text'
    },
    {
        title:'Cerrar Sesión',
        path:'/',
        icon: <BiICons.BiExit/>,
        cName:'nav-text'
    },
]
