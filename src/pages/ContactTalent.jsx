import React from 'react'
import TalentForm from '../components/TalentForm'
import styles from '../style'
import {useEffect} from "react"

function ContactTalent({bool}) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [bool]);
  return (
    <div className=" bg-white w-full overflow-hidden mt-20 mb-10" >
    <div className={`${styles.flexStart}`} >
           <div className="w-full px-10" >
             <TalentForm/>
             
           </div>

          </div>
       
</div>
  )
}

export default ContactTalent