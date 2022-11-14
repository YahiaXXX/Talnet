import React from 'react'
import world from "../assets/Map.svg"

function HeroAbout2() {
  return (
    <section id="heroabout2" className={`flex flex-col sm:py-0 py-6`}>
        <div className=' flex-1 flex md:flex-row flex-col justify-center md:gap-20 gap-2' >
        
      <h1 className=" text-center text-black font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[60px] text-[56px]">
      We're here for you <br/> <span className=' text-blue-500' >no matter where you are</span>
      </h1>


        </div>
        <div className= " flex flex-col justify-center items-center  my-20 mx-5" >
           
            <img src={world} alt="people" className=' h-[100%] w-[100%]' />


           
            

        </div>
   
  </section>

  )
}

export default HeroAbout2