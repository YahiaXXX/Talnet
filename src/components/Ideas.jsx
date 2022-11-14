import React from 'react'
import styles from '../style'
import ideaIcon1 from "../assets/ideaIcon1.svg"
import ideaIcon2 from "../assets/ideaIcon2.svg"
import ideaIcon3 from "../assets/ideaIcon3.svg"
import IdeaCard from './IdeaCard'


function Ideas() {
  return (
    <section 
    id="ideas"
    className={` bg-[#FAFCFE] flex flex-col ${styles.paddingX} ${styles.paddingY} mt-40 `}
  >
    <div className=' flex justify-center items-center w-full mb-10  ' >
        <h1  className=' text-[60px] font-semibold text-[#217BF4]' >Ideas for</h1>
    </div>
    <div
      className={`flex-1 ${styles.flexStart} md:flex-row flex-col sm:gap-20 justify-center items-center gap-10 mb-20  sm:px-16 px-6`}
    >
      <IdeaCard url={ideaIcon1} title={"Startups"} />
      <IdeaCard url={ideaIcon2} title={"High growth companies scaling rapidly"} />
      <IdeaCard url={ideaIcon3} title={"Remote firstcompanies"} />
      

      
     
    
    </div>
   <div className=' flex justify-center items-center'  >
    <p className=' text-[#217BF4] text-[30px] text-center' >And anyone who wants to hire the best fit<br /> candidate for the job</p>
   </div>
    
    
  </section>
  )
}

export default Ideas