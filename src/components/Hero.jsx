import React from 'react'
import styles from '../style'
import hero from "../assets/bg-hero.png"

function Hero() {
  return (
    <section 
    id="heroHome"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div
      className={`z-[1] md:absolute flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className=" flex flex-row  justify-between  items-center w-full">
        <h1 className=" flex-1 font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[60px] text-[56px] text-[#0A093D]">
          Talent.Work,<br className="md:hidden block" /> build your<br className="sm:block hidden" />{" "}
          <span className="text-[#0A093D] ">dream team</span> <br />
          </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[350px] mt-10`} >We are making hiring top talents easy , precise and affordable.</p>
      
      <button className='sm:mt-20 mt-5 sm:py-5 py-3 sm:px-40 px-10 bg-[#217BF4] rounded-md text-white' >Contact Us</button>
    
    </div>

    
    
    <div className='flex-1 md:flex hidden' ></div>

    <div className={` flex-2 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
      <img src={hero} alt="billing" className="w-[100%] h-[100%] relative" />
      
    </div>
    
  </section>
  )
}

export default Hero