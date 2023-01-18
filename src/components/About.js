import React from 'react'

const About = () => {
    const abouts = [
        {
            id: 1,
            title: '99.99%',
            subtitle: 'uptime',
        },
        {
            id: 2,
            title: '24/7',
            subtitle: 'customer service',
        },
        {
            id: 3,
            title: '10 GB',
            subtitle: 'free storage',
        },
        {
            id: 4,
            title: 'domain',
            subtitle: 'free with sign up',
        }
    ]
  return (
    <div name='about' className='w-full h-fit md:h-fit bg-gray-900 text-white '>
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <div className=' px-4 py-12 text-center'>
                <h2 className='text-5xl font-bold '>
                    By <span className='text-lightcolor capitalize'> developer</span> for {''} 
                    <span className='text-lightcolor capitalize'>developer</span> 
                </h2>
                <p className='text-xl font-light text-gray-500 py-8'>
                    In still leave bird whispered remember, fancy curious entrance i gently swung.
                    The she thereis i lordly, over beating and and the the muttered lenore. Lost 
                    in i wrought my in only. Door friends angels.
                </p>
            </div>
            <div className='grid md:grid-cols-2 gap-10 px-2 w-full'>
                {abouts.map(({id,title,subtitle})=>(
                    <div key={id} className='flex items-center justify-center odd:skew-x-12 even:-skew-x-12 hover:skew-x-0 duration-300'>
                    <div className='flex flex-col items-center justify-center w-64 h-64 py-8 rounded-full shadow-lg
                       shadow-lightcolor'>
                        <p className='text-5xl font-bold text-lightcolor'>{title}</p>
                        <p className='text-gray-400 mt-2'>{subtitle}</p>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default About