import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const links = [
        {
            id:"home",
            title:"Home",
            path:"/"
        },
        {
            id:"about", 
            title:"About",
            path:"/about"
        },
        {
            id:"gallery",
            title:"Gallery",
            path:"/gallery"
        },
        {
            id:"stock-photos",
            title:"Stock Photos",
            path:"/stock-photos"
        },
        {
            id:"contact",
            title:"Contact",
            path:"/contact"
        }
    ]
  
  
  
  
    return (
    <footer className="bg-headBlue py-4 text-slate-900">
        <ul className="list-none flex justify-center flex-1 gap-3">
                {links.map((link, index) => (
                    <li key={link.id} className={'font-encodeSans text-sm hover:text-white hover:underline duration-500 cursor-pointer '}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
        </ul>
        <center>
            <small className="text-center">&copy; Copyright 2022, Jam Chan Photography. All Rights Reserved.</small>
        </center>
        
    </footer>
  )
}

export default Footer