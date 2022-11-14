import React from 'react'
import hero from "../assets/heroJobs.svg"
import styles from '../style'
import { layout } from '../style'
import {useNavigate} from "react-router-dom"

function HeroJobs() {
  const navigate=useNavigate()
  return (
    <section id='heroJobs' className={`flex flex-col sm:py-0 py-6`}>
        <div className=' flex-1 flex md:flex-row flex-col justify-center md:gap-20 gap-2' >
        <div className={ ` md:h-[500px] h-[300px]  text-center flex flex-col justify-center md:items-start items-center `}>
      <h1 className="text-black font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[60px] text-[56px]">
      Find a job position with<br className="sm:block hidden" /> Telnetwork.
      </h1>
      
    </div>
    <div className={`${layout.sectionImg2}  flex-col`}>
      <img src={hero} alt="hero" className=' w-[100%] h-[100%]' />
    </div>

        </div>
        <div className=' flex-1 flex flex-col' >
            <div className=' mt-4 md:px-16 px-0 w-full' >
                <p className=' w-full'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna at et scelerisque dictumst orci, nibh morbi ultrices praesent. Et scelerisque amet cursus et sit. Dictum enim tellus in arcu amet consequat pulvinar pharetra eu. At vestibulum facilisis molestie massa tellus eget sagittis sit sollicitudin.. Dictum enim tellus in arcu amet consequat pulvinar pharetra eu. At vestibulum facilisis molestie massa tellus eget sagittis sit sollicitudin.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna at et scelerisque dictumst orci, nibh morbi ultrices praesent. Et scelerisque amet cursus et sit. Dictum enim tellus in arcu amet consequat pulvinar pharetra eu. At vestibulum facilisis molestie massa tellus eget sagittis sit sollicitudin.. Dictum enim tellus in arcu amet consequat pulvinar pharetra eu. At vestibulum
                </p>
            </div>
            <div className=' flex flex-row justify-end items-center mt-8' >
                <button onClick={()=>navigate("/jobs/application")} className=' bg-[#217BF4] text-white py-4 px-10 rounded-md' >spontaneous application</button>
            </div>

        </div>
   
  </section>
  )
}

export default HeroJobs