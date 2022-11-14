import React from 'react'

function IdeaCard({url,title}) {
  return (
    <div  className=' w-full flex flex-col justify-center items-center gap-10' >
       <img src={url} alt="icon" className=' sm:w-full w-[80%] h-full' />
       <div  className=' w-full sm:min-h-[200px] min-h-[100px] justify-center items-center' >
        <h1 className=' text-center text-[#5A5A5A] text-[40px]' >{title}</h1>
       </div>
       
    </div>
  )
}

export default IdeaCard