import React from 'react'

function FormationItem({title,subtitle,periode}) {
  return (
    <div className=' flex flex-col  w-full gap-1 sm:ml-10 ml-0' >
        <h1>{title}</h1>
        <div className=' flex flex-col gap-1 ml-10'>
        <h5>{subtitle}</h5>
        <p>{periode}</p>

        </div>
        

    </div>
  )
}

export default FormationItem