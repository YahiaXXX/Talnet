import React from 'react'
import {useNavigate} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

function OfferCard() {
    const navigate=useNavigate()
  return (
    <div className='drop-shadow-lg sm:w-[60%] w-full  p-4 bg-white backdrop-blur-2xl rounded-md flex flex-col items-center justify-center mt-6 mb-6' >
        <div className=' w-full justify-start items-center flex' >
            <h2 className=' font-semibold'>UX / UI DESIGNER - CDD / CDI</h2>
        </div>
        <div className=' px-6 w-full mt-2' >
            <p className=' text-[#5A5A5A] text-base' >En charge de la conception UX / UI des maquettes d’applications vous êtes en lien direct avec le client pour prendre en compte son besoin métier, le challenger et proposer des parcours utilisateurs fluides et intuitifs.</p>
        </div>
        <div className=' w-full justify-end flex items-center mt-3' >
            <HashLink  to="/jobs/offer#sec" smooth > 
            <button onClick={()=>navigate("/jobs/offer")} className=" text-[#217BF4] py-3 px-6 rounded-md border-solid border-[1px] border-[#217BF4]  mr-2" >See the offer</button>

            </HashLink>
            
            <button className=' text-white py-3 px-6 rounded-md bg-[#217BF4] border-solid border-[1px] border-[#217BF4]' >apply</button>
        </div>

    </div>
  )
}

export default OfferCard