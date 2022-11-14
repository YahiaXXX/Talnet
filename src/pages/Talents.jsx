import React,{useEffect} from 'react'
import HeroTalents from '../components/HeroTalents'
import Talentscomp from '../components/Talentscomp'
import styles from '../style'

function Talents({bool}) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [bool]);
  return (
    <div className=" bg-white w-full overflow-hidden mt-20" >
         <div className={`${styles.flexStart}`} >
                <div className="w-full px-16" >
                  <HeroTalents/>
                  
                </div>
    
               </div>
               <div className={`${styles.flexStart}`} >
                <div className="w-full px-4" >
                  <Talentscomp/>
                </div>
    
               </div>
    </div>
  )
}

export default Talents