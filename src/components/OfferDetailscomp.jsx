import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {useNavigate} from "react-router-dom"

function OfferDetailscomp() {
    const navigate=useNavigate()
  return (
    <section id="offerDetail" className={`flex flex-col sm:py-0 py-6 mt-10`}>
    <div className=' px-10 w-full flex justify-start items-center flex-row' >
       <AiOutlineArrowLeft onClick={()=>navigate("/jobs")} className=' h-7 w-7 cursor-pointer'/>
    </div>
<div className='flex flex-row justify-center items-center w-full' >
 <h1 className=' text-black ss:text-[50px] text-[40px]' >UX / UI DESIGNER - CDD / CDI</h1>
</div>
<div className=' flex flex-col px-10' >
    <div className=' flex flex-col' >
        <h3 className='text-[25px] mb-5 mt-5 ' >About the role</h3>
        <div className=' max-w-[900px]' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum ullam porro, laboriosam in veritatis at cum consequatur eos nam corrupti eveniet facilis ea rerum error, cupiditate ut quaerat temporibus?</p>
        </div>
    </div>
    <div className=' flex flex-col' >
        <h3 className=' text-[25px] mb-5 mt-5 ' >Tasks</h3>
     <ul className=' mt-2' >
                <li className=' mt-2' >plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
                <li>plan and implement new designs</li>
            </ul>

    </div>

</div>
<div className=' flex justify-end flex-row items-center mt-5' >
    <button className=' bg-[#217BF4] py-3 px-8 rounded-md text-white' >Apply</button>
</div>


</section>
  )
}

export default OfferDetailscomp