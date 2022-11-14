import React,{useEffect} from 'react'
import styles from '../style'
import OfferDetailscomp from '../components/OfferDetailscomp'
import SpontaniousAppcomp from '../components/SpontaniousAppcomp'

function SpontaniousApp({bool}) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [bool]);
  return (
    <div className=" bg-white w-full overflow-hidden mt-20 mb-10" >
    <div className={`${styles.flexStart}`} >
           <div className="w-full px-16" >
             <SpontaniousAppcomp/>
             
           </div>

          </div>
       
</div>
  )
}

export default SpontaniousApp