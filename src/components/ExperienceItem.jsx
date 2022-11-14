import React from 'react'

function ExperienceItem({title,role,start,end,place}) {
  return (
    <div className=' flex flex-col w-full gap-1 sm:ml-10 ml-0' >
        <h4>{title}</h4>
        <div className=' flex flex-col gap-1 ml-10' >
        <h5>{role}</h5>
            <p>{start+"-"+end}</p>
            <p>{place}</p>

        </div>
           


    </div>
  )
}

export default ExperienceItem