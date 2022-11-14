import React from 'react'
import styles from "../style"
import rec from "../assets/svg1.svg"
import Card from './Card'

function Whyus2() {
  return (
    <section 
    id="whyus"
    className={` flex flex-col justify-center items-center ${styles.paddingY} mt-20
    `}
  >
    <div className=' w-full flex justify-start mb-5' >
      <h1 className='text-[#217BF4] font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[70px] text-[56px] text-center' >
      Uncover the best candidates by using the most predictive assessments
      </h1>
    </div>
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-1' >
      <Card url={rec} />
      <Card url={rec} />
      <Card url={rec} />
      <Card url={rec} />

    </div>


  </section>
  )
}

export default Whyus2