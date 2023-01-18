import React from 'react'
import Greenbtn from './Greenbtn';
import { RiComputerFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";


const Support = () => {
  const supports = [
    {
      id:1,
      title: 'Technical',
      subtitle: `Euch es noch schmerz manche lauf ich in schauer die.
       Es stillen lied widerklang weich ihr mir nun neu mein,.`,
       icons: <RiComputerFill size={25}/>,
    },
    {
      id: 2,
      title: 'Sales',
      subtitle: `Ipsum elitr amet ea ipsum labore dolores,
       clita consetetur tempor sit magna sit voluptua sed sit, 
       lorem eirmod voluptua amet.`,
       icons: <MdSupportAgent size={25}/>,
    },
    {
      id: 3,
      title: 'General',
      subtitle: `Hinweggeschwunden gestalten guten ein entwöhntes noch geisterreich. 
      Und sich es entwöhntes in umwittert noch wohl freundschaft ihr, euren sich lebt.`,
      icons: <BsFillPersonFill size={25}/>,
    }
  ]
  return (
    <div name='support' className='w-full h-fit bg-slate-300'>
      <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
        <div className='px-4 py-12'>
          <h2 className='text-5xl font-bold text-center'>support</h2>
          <p className='text-xl py-8 text-gray-600'>
            Not streaming curtain me youhere theeby. Methought stopped sent at of truly,
             from footfalls bust.
          </p>
        </div>
        {/*Support Cards*/}
        <div className='grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          {supports.map(({id,title,subtitle,icons})=>(
            <div key={id} className='bg-gray-900 text-white rounded-xl shadow-lg shadow-darkcolor'>
            <div className='p-8'>
              <div className='flex items-center justify-center w-16 h-16 p-4 bg-lightcolor text-darkcolor rounded-full 
              mt-[-4rem]'>
                {icons}
              </div>
              <h3 className='font-bold text-2xl my-6'>{title}</h3>
              <p className='text-gray-300 text-base pb-12'>
                {subtitle}
              </p>
            </div>
          </div>
          ))}
          </div>

          <div className='flex w-full items-center justify-center'>
            <Greenbtn title='contact us' className='capitalize py-3 px-6 w-1/2 my-12 hover:bg-darkcolor'/>
          </div>

      </div>
    </div>
  )
}

export default Support