import React from 'react'
import hero from "../assets/heroJobs.svg"
import styles from '../style'
import { layout } from '../style'
import {useNavigate} from "react-router-dom"
import people from "../assets/people.png"

function HeroAbout() {
    const navigate=useNavigate()
  return (
    <section  id='heroAbout'  className={` flex flex-col mt-10 sm:py-0 py-6`}>
        <div className=' flex-1 flex md:flex-row flex-col justify-center md:gap-20 gap-2' >
        
      <h1 className=" text-center text-black font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[60px] text-[56px]">
      We're here to <br/> <span className=' text-blue-500' >build your dream team.</span>
      </h1>


        </div>
        <div className=' flex flex-col relative mt-10 mx-5' >
            <div className=' z-[0] absolute px-10 py-5 sm:h-[300px] h-[200px] blue__gradient3 rounded-3xl ' >
                <p className=' text-white' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate perferendis, quia enim nesciunt quibusdam, ex magnam optio cupiditate autem ut fugit laboriosam porro sit eaque ullam amet. Atque, nulla est!</p>
                
            </div>
            <img src={people} alt="people" className=' ss:mt-20 mt-40 z-[1]' />


           
            

        </div>
   
  </section>
  )
}

export default HeroAbout