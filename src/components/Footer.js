import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Greenbtn from './Greenbtn';

const Footer = () => {
    const socials = [
        {
            id: 1,
            icon: <FaFacebook size={25} />
        },
        {
            id: 2,
            icon: <FaInstagram size={25} />
        },
        {
            id: 3,
            icon: <FaTwitter size={25} />
        },
        {
            id: 4,
            icon: <FaWhatsapp size={25} />
        },
    ]
    return (
        <div className='w-full bg-gray-900 text-gray-600 py-8 px-2 border-t-2'>
            <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
                <div className='flex flex-col gap-8 md:flex-row items-center justify-centerm w-full'>
                    {/*Social Icons*/}

                    <div className='w-3/4 md:w-1/2'>
                        <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
                            {socials.map(({ id, icon }) => (
                                <div key={id} className='flex items-center justify-center rounded-md shadow-md
                            shadow-lightcolor p-3 cursor-pointer hover:scale-105 duration-200 ease-in'>
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*News Letter*/}

                    <div className="w-3/4 md:w-1/2">
                        <div className="w-full pt-8 md:pt-2">
                            <p className="font-bold uppercase mb-8 text-lightcolor text-lg text-center md:text-left">
                                Subscribe to our newsletter
                            </p>
                            <form
                                action="" className="flex flex-col sm:flex-row">
                                <input type="text" name="email" className="w-full p-2 mr-4 rounded-md mb-4 text-gray-900" placeholder="Daily newsletter..." />
                                <Greenbtn title="Subscribe" className="p-2 mb-4" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer