import React from 'react'
import { useNavigate } from 'react-router-dom'
import person from "../assets/person.svg"

function TalentCard() {
    const navigate=useNavigate()
  return (
    <div className='drop-shadow-lg sm:w-[60%] w-full  p-4 bg-white backdrop-blur-2xl rounded-md flex flex-col items-center justify-center mt-6 mb-6' >
        <div className=' w-full justify-start items-center flex' >
            <div className=' flex flex-row w-full' >
                <img src={person} alt="person" className=' w-20 h-20' />
                <div className=' flex flex-col justify-center items-start' >
                <h2 className=' font-semibold'>UX / UI DESIGNER - CDD / CDI</h2>
                <p>ahmed</p>

                </div>

            </div>
            
        </div>
        <div className=' px-6 w-full mt-4' >
            <p className=' text-[#5A5A5A] text-base' >En charge de la conception UX / UI des maquettes d’applications vous êtes en lien direct avec le client pour prendre en compte son besoin métier, le challenger et proposer des parcours utilisateurs fluides et intuitifs.</p>
        </div>
        <div className=' w-full justify-end flex items-center mt-3' >
            <button onClick={()=>navigate("/talents/details")} className=" text-[#217BF4] py-3 px-6 rounded-md border-solid border-[1px] border-[#217BF4]  mr-2" >See more</button>
            <button className=' text-white py-3 px-6 rounded-md bg-[#217BF4] border-solid border-[1px] border-[#217BF4]' >Contact</button>
        </div>

    </div>
  )
}

export default TalentCard