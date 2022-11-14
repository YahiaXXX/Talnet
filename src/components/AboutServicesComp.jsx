import React from 'react'
import styles from '../style'
import { layout } from '../style'
import services from "../assets/servicesDetailsHero.svg"


function AboutServicesComp() {
  return (
    <section id="aboutservices" className={`flex flex-col mt-20 sm:py-0 py-6`}>
    <div className=' flex-1 flex md:flex-row flex-col justify-center md:gap-20 gap-2' >
    <div className={ `  md:h-[500px] h-[300px] gap-10 sm:gap-20  text-center flex flex-col justify-center items-center `}>
  <h1 className="text-black font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[60px] text-[56px]">
  Services under<br className="sm:block hidden" /> construction
  </h1>
  <div className=' flex justify-center items-center sm:mb-0 mb-40' >
  <p className=' max-w-[50%]' >
  our team is working on the services , you can subscrib to our mailing list so you can be notified when things are livelier
  </p>

  </div>
  
  
</div>
<div className={`${layout.sectionImg2} sm:px-10  flex-col`}>
  <img src={services} alt="hero" className=' w-[100%] h-[100%]' />
</div>

    </div>
    <div className=' flex-1 flex flex-col' >
        <div className=' mt-4 md:px-16 px-0 w-full' >
            <p className=' text-center  w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna at et scelerisque dictumst orci, nibh morbi ultrices praesent. Et scelerisque amet cursus et sit. Dictum enim tellus in arcu amet consequat pulvinar pharetra eu. At vestibulum facilisis molestie massa tellus eget sagittis sit sollicitudin.. Dictum enim tellus in arcu amet consequat pulvinar pharetra eu. At vestibulum facilisis molestie massa tellus eget sagittis sit sollicitudin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna at et scelerisque dictumst orci, nibh morbi ultrices praesent. Et scelerisque amet cursus et sit. Dictum enim tellus in arcu amet consequat pulvinar pharetra eu. At vestibulum facilisis molestie massa tellus eget sagittis sit sollicitudin.. Dictum enim tellus in arcu amet consequat pulvinar pharetra eu. At vestibulum
            </p>
        </div>
        

    </div>

</section>
  )
}

export default AboutServicesComp