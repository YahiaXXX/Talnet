import React from 'react'
import { layout } from '../style'
import {useNavigate} from "react-router-dom"
import img1 from "../assets/1.svg"
import img2 from "../assets/2.svg"
import img3 from "../assets/3.svg"


function Whyus() {
  const navigate=useNavigate()
  return (
    <section id='whyus' className={`flex flex-col sm:py-0 py-6 mt-60`}>

    <div className=' flex-1 flex md:flex-row flex-col justify-center items-center md:gap-20 gap-2' >
    <div className='  gap-20 w-full flex-col flex md:justify-start md:items-start items-center justify-center mb-5' >
      <h1 className='text-[#217BF4] text-center font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[60px] text-[56px]' >Why Talent.Work?</h1>
      <p className=' text-center text-base text-[20px] max-w-[60%]' >Ultra low cost, unified ecosystem source candidates across globe,assess and track applications.</p>
    </div>

  <div className=' w-full h-full gap-10 flex sm:flex-row flex-col' >
    <div className=' flex justify-center items-center flex-[30%]' >
    <img  src={img1} alt="hero" className=' w-[100%] h-[80%] object-cover  rounded-lg' />
    </div>
    <div className=' flex-[30%] gap-10 flex flex-col' >
    <img src={img2} alt="hero" className=' object-cover  rounded-lg w-[100%] h-[100%]' />
    <img src={img3} alt="hero" className=' object-cover  rounded-lg w-[100%] h-[100%]' />
    </div>

 
  
</div>

    </div>
    

</section>
  )
}

export default Whyus