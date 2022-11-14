import React from 'react'
import styles from "../style"
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import Whyus from "../components/Whyus"
import Contact from "../components/Contact"
import Footer1 from "../components/Footer1"
import Ideas from '../components/Ideas'
import Whyus2 from '../components/Whyus2'
import {useEffect} from "react"


function Home({bool}) {
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [bool]);
    return (
        <div className=" bg-white w-full overflow-hidden mt-20">
    
               <div className={`${styles.flexStart} relative`} >
               <div className='absolute z-[0] md:h-[130%] h-[100%] w-[100%] blue__gradient' />
                <div className={`${styles.boxWidth}`} >
                  <Hero/>
                </div>
    
               </div>
               <div className={` ${styles.paddingX}  ${styles.flexStart}`} >
                <div className={`${styles.boxWidth}`} >
                  <Whyus/>
                  
                
                 
                </div>
                
    
               </div>
               <div className={` ${styles.flexStart}`} >
                <div className=" w-full" >
                  <Ideas/>
                  
                
                 
                </div>
                
    
               </div>
               <div className={` ${styles.paddingX}  ${styles.flexStart}`} >
                <div className={`${styles.boxWidth}`} >
                  <Whyus2/>
                  
                
                 
                </div>
                
    
               </div>
               <div className={`${styles.flexStart} relative`} >
               <div className=' absolute z-[0]  h-[100%] w-[100%] blue__gradient2' />
                <div className={`${styles.boxWidth}` } >
                <Contact/>
                  
                </div>
    
               </div>
               
               
          
        </div>
      )
}

export default Home