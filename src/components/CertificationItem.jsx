import React from 'react'

function CertificationItem({title,company,date}) {
  return (
    <div className=' flex flex-col  w-full gap-1 sm:ml-10 ml-0' >
        <h1>{title}</h1>
        <h5>{company}</h5>
        <p>Issued {date}</p>

        

    </div>
  )
}

export default CertificationItem