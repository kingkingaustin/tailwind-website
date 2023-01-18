import React from 'react'
import Greenbtn from './Greenbtn';
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { SiTwitch, SiLinkedin, SiFacebook, SiTwitter } from "react-icons/si";
import { useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {

  const [navi, setNavi] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'services',
    },
    {
      id: 3,
      link: 'about',
    },
    {
      id: 4,
      link: 'support',
    },
    {
      id: 5,
      link: 'pricing',
    },

  ]
  return (
    <div className='w-screen h-20 z-20 fixed bg-gray-900 text-white'>
      <div className='px-3 flex items-center justify-between w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-4xl font-bold capitalize'>onnn</h1>
        </div>
        <ul className=' hidden md:flex'>
          {links.map(({ id, link }) => (
            <li key={id} className='capitalize p-4 cursor-pointer hover:scale-105 hover:text-lightcolor duration-200 '>
              <Link to={link} smooth duration={500}>
              {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className='hidden md:flex mr-4'>
          <Greenbtn title='sign in' className='px-9 py-3' />
        </div>
        {/*Burger icon*/}
        <div className='md:hidden'>
          <div onClick={() => setNavi(true)} className='cursor-pointer'>
            <GoThreeBars size={30} />
          </div>
        </div>
      </div>
      {/*Mobile menu*/}
      <div className={navi ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur' : ''}>
        <div className={navi ? 'fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-500' : 'fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <h2 onClick={() => setNavi(false)} className='text-3xl font-bold capitalize cursor-pointer'>
                onnn
              </h2>
              <div onClick={() => setNavi(false)} className='p-3 cursor-pointer'>
                <FaTimes size={30} />
              </div>
            </div>
          </div>
 
          <div className='mt-10 flex flex-col h-fit gap-8'>
            <Greenbtn className='px-9 py-3 capitalize' title='sign in'/>
            <ul className='capitalize'>
              {links.map(({ id, link }) => (  
                 <li key={id} className=' py-4 text-xl tracking-wider cursor-pointer  hover:text-lightcolor duration-300'>
              <Link onClick={() => setNavi(false)} to={link} smooth duration={500}>
              {link}
              </Link>
              </li> 
              ))}
            </ul>
            <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightcolor p-3 cursor-pointer hover:scale-105 duration-200'>
                <SiFacebook size={25}/>
              </div>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightcolor p-3 cursor-pointer hover:scale-105 duration-200'>
                <SiLinkedin size={25}/>
              </div>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightcolor p-3 cursor-pointer hover:scale-105 duration-200'>
                <SiTwitter size={25}/>
              </div>
              <div className='flex items-center justify-center rounded-md shadow-md shadow-lightcolor p-3 cursor-pointer hover:scale-105 duration-200'>
                <SiTwitch size={25}/>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Navbar