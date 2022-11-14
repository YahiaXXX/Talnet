import React from 'react'
import cadre from "../assets/cadre.svg"

function  Card({url}) {
  return (
    <div className='  w-full flex flex-row justify-center items-center' >
      <img src={url} alt="rec" className='w-[100%] h-[100%]' />

    </div>
  )
}

export default Card