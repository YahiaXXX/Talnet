import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"
import {BsArrowRight} from "react-icons/bs"

function ServiceCard({icon,title}) {
    const navigate=useNavigate()
  return (
    <div className=' h-[400px] drop-shadow-lg sm:w-[60%] w-full  p-4 bg-white backdrop-blur-2xl rounded-md flex flex-col items-center justify-center mt-6 mb-6' >
        <div className=' w-full justify-center items-center flex' >
            
                <img src={icon} alt="person" className=' w-20 h-20' />
            
           
            
        </div>
        <div className='   h-[70%] justify-center items-center gap-4 flex flex-col px-6 w-full mt-4' >
            <h1 className=' font-semibold text-center text-[25px]' >{title}</h1>
            <p className=' text-[#5A5A5A] text-center text-base' >En charge de la conception UX / UI des maquettes d’applications vous êtes en lien direct avec le client pour prendre en compte son besoin métier, le challenger et proposer des parcours utilisateurs fluides et intuitifs.</p>
        </div>
        <div className='   h-[20%]  w-full justify-center flex items-center flex-row mt-3' >
            <Link to={"/services/more"}  > 
            <div  className=' rounded-lg flex flex-row justify-center gap-3 items-center' >
                <p className='text-[15px]' >Read more</p>
                <BsArrowRight className=' w-[20px] h-[20px]' />
                </div>
                </Link>
        </div>
    </div>
  )
}

export default ServiceCard