import Link from 'next/link'
import { title } from 'process'
import React from 'react'

interface Inavitem{
    title:string,
    link:string,

}
export const navItem:Inavitem[]=[
    {
        
        title:"Home",
        link: "/"
    },
    {
        
        title:"About",
        link: "/about"
    },
    {
        title:"ContactUs",
        link:"/contact-us"
    },
    {
        title:"Projects",
        link:"/projects"
    },
    
]
  


export default navItem
