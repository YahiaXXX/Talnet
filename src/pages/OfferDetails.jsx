import React,{useEffect} from 'react'
import OfferDetailscomp from '../components/OfferDetailscomp'
import styles from '../style'


function OfferDetails({bool}) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [bool]);
  return (
    <div className=" bg-white w-full overflow-hidden mt-20 mb-10" >
         <div className={`${styles.flexStart}`} >
                <div className="w-full px-16" >
                  <OfferDetailscomp/>
                  
                </div>
    
               </div>
            
    </div>
   
  )
}

export default OfferDetails