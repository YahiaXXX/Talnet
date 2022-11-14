import React from 'react'
import OfferCard from './OfferCard'

function Offers() {
  return (
    <section id='offers' className={`flex flex-col sm:py-0 py-6`}>
   <div className='flex flex-row md:justify-start justify-center items-center w-full border-b-[2px] border-b-[#217BF4]' >
    <h1 className=' text-black ss:text-[50px] text-[40px]' >Offers:</h1>
   </div>
   <div className='  flex w-full flex-col justify-center items-center' >
    <OfferCard/>
    <OfferCard/>
    <OfferCard/>
    <OfferCard/>

   </div>

</section>
  )
}

export default Offers