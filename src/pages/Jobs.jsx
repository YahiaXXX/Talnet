import React from 'react'
import HeroJobs from '../components/HeroJobs'
import Offers from '../components/Offers'
import styles from '../style'
import {useEffect} from "react"

function Jobs({bool}) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [bool]);
  return (
    <div className=" bg-white w-full overflow-hidden mt-20" >
         <div className={`${styles.flexStart}`} >
                <div className="w-full px-16" >
                  <HeroJobs/>
                  
                </div>
    
               </div>
               <div className={`${styles.flexStart}`} >
                <div className="w-full px-4" >
                  <Offers/>
                </div>
    
               </div>
    </div>
  )
}

export default Jobs