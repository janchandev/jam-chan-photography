import React from 'react'
import { useState } from 'react'
import { Logo, Hamburger, Close } from '../images'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = [
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

    const [toggle, setToggle] = useState(false)

    const toggleClick = () => setToggle((prev) => !prev)

  return (
    <nav className="w-full flex justify-between items-center lg:px-20 2xl:px-36 px-4">
        <Link to="/" onClick={toggleClick}>
          <div className="navbar-logo flex cursor-pointer">
            <img className="h-24"src={Logo} alt="Home logo" title="Home" />
            <h1 className="font-goudy text-darkBlue text-3xl pt-4 ">Jam Chan <br /> Photography</h1>
        </div>  
        </Link>
        <div>
            {/* Large nav links */}
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {links.map((link, index) => (
                    <li key={link.id} className={'font-encodeSans text-darkBlue hover:text-darkOrange hover:underline duration-500 cursor-pointer md:ml-9 pt-10 '}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>

             {/* Small nav links */}
            <div className="md:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? Close : Hamburger} alt="Menu" className="w-10 h-10 object-contain" onClick={toggleClick}/>
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-darkBlue/90 absolute top-24 right-0 w-full sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                    {links.map((link, index) => (
                        <li key={link.id} className={'font-encodeSans cursor-pointer py-4 text-white hover:text-lightOrange hover:underline duration-500'}>
                            <Link to={link.path} onClick={toggleClick}>{link.title}</Link>
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
