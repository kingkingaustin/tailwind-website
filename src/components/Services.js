import React from 'react'
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'one',
      subtitle: 'Rebum at et et est sea erat et amet elitr. At erat ut et sed stet rebum clita. Consetetur gubergren.'
    },
    {
      id: 2,
      title: 'two',
      subtitle: 'Not start deemed sea his olden mirth what that unto which, his though flow below condole moths awake, was low.'
    },
    {
      id: 3,
      title: 'three',
      subtitle: 'Wirklichkeiten zug beifall gesänge zu schöne. Herzen die glück und und fühl. Denen stunden ein besitze  im zu mich.'
    },
    {
      id: 4,
      title: 'four',
      subtitle: 'Kynzathul halal kyt illen yg arad therthetyk owog ezes therthetyk, en bezzeg hol en buthuruth wirud, ezes en ulud leg.'
    }
  ]
  return (
    <div name='services' className='w-full h-fit md:h-screen bg-slate-300'>
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <h2 className='text-5xl font-bold text-center'>
              services
            </h2>
            <p className='text-xl py-8 text-gray-600 text-center'>
              Terrors something and quoth and bird was, soul hesitating front each word a door that lining. 
              Shall of violet the.
            </p>

            <div className='grid sm:grid-cols-2 gap-4 pt-4'>

              {services.map(({id,title,subtitle})=>(
                <div key={id} className='flex items-start p-4 bg-gray-900 text-white rounded-md'>
                <div>
                  <FaChevronCircleRight size={20} className='mt-3 mr-4 text-lightcolor '/>
                </div>
                <div>
                  <h3 className='font-bold text-lg text-lightcolor pt-2 pb-4 capitalize'>
                    {title}
                  </h3>
                  <p className='text-lg'>
                    {subtitle}
                  </p>
                </div>
              </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Services