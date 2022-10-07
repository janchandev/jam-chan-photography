import React from 'react'
import { useState } from 'react'
import { Logo, Hamburger, Close } from '../images'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './../pages/Home'
import About from './../pages/About'
import Gallery from './../pages/Gallery'
import StockPhotos from './../pages/StockPhotos'
import Contact from './../pages/Contact'

const Navbar = () => {
    const links = [
        {
            id:"about",
            title:"About",
            path:"/about",
            element: <About />
        },
        {
            id:"gallery",
            title:"Gallery",
            path:"/gallery",
            element: <Gallery />
        },
        {
            id:"stock-photos",
            title:"Stock Photos",
            path:"/stock-photos",
            element: <StockPhotos />
        },
        {
            id:"contact",
            title:"Contact",
            path:"/contact",
            element: <Contact />
        }
    ]

    const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex justify-between items-center lg:px-20 2xl:px-36 px-4 border-solid border-black border-2">
        <div className="flex">
            <img className="h-24"src={Logo} alt="Home logo" title="Home" />
            <h1 className="font-goudy text-darkBlue text-3xl pt-4 ">Jam Chan <br /> Photography</h1>
        </div>
        <div>
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {links.map((link, index) => (
                    <li key={link.id} className={'font-encodeSans text-darkBlue cursor-pointer md:ml-9 pt-10 '}>
                        <a href="#">{link.title}</a>
                    </li>
                ))}
            </ul>

            <div className="md:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? Close : Hamburger} alt="Menu" className="w-10 h-10 object-contain" onClick={() => setToggle((prev) => !prev)}/>
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-headBlue absolute top-20 right-0 mx-4 my-2 min-w[140px] sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                    {links.map((link, index) => (
                        <li key={link.id} className={'font-encodeSans cursor-pointer py-4 '}>
                            <a href="#">{link.title}</a>
                        </li>
                    ))}
                    </ul>
                </div>

            </div>
        </div>
       
    </nav>
  )
}

export default Navbar
