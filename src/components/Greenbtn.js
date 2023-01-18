import React from 'react'

const Greenbtn = ({title, onClick, className}) => {
  return (
   <button className={`border bg-lightcolor text-darkcolor border-lightcolor hover:bg-transparent
    hover:text-lightcolor rounded-md duration-300 ease-out ${className}`} onClick={onClick}>
    {title}
   </button>

   

  )
}

export default Greenbtn