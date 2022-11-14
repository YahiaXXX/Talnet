import React,{useEffect} from 'react'
import ServiceCard from '../components/ServiceCard'
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import styles from '../style'
import { useNavigate } from 'react-router-dom'
import icon4 from "../assets/icon4.svg"
import {AiOutlineArrowLeft} from "react-icons/ai"

function Services({bool}) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    const navigate=useNavigate()
  return (
    <div
    id="heroServices"
    className={` flex flex-col ${styles.paddingY} mt-20 `}
  >
        {/* <div className=' md:px-10 px-0 w-full flex justify-start items-center flex-row' >
       <AiOutlineArrowLeft onClick={()=>navigate("/jobs#heroJobs")} className=' h-7 w-7 cursor-pointer'/>
    </div> */}
    <div className=' flex justify-center items-center w-full mb-10  ' >
        <h1  className=' text-[60px] font-semibold text-[#217BF4]' >Our Services</h1>
    </div>
    <div className=' flex justify-center items-center px-20'  >
    <p className='text-[15px] text-center' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quod iure alias totam recusandae et earum, eligendi temporibus facilis cupiditate nesciunt aliquam dolore atque quae sint fugit provident officia aperiam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat sed voluptatem, ipsa consectetur, sunt nam vero ea ipsam quas officiis neque minus, iure adipisci sapiente. Voluptatum quisquam quidem at.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde ut deserunt, laborum explicabo amet? Recusandae nam ipsa in ratione facilis reiciendis consectetur, cum obcaecati voluptates quae sapiente cumque! Aut.
    </p>
   </div>
    <div
      className={`flex-1 ${styles.flexStart} md:flex-row flex-col sm:gap-20 justify-center items-center gap-10 mb-20 mt-20  sm:px-16 px-6`}
    >
      <ServiceCard icon={icon1} title={"build onsite team"} />
      <ServiceCard icon={icon2} title={"build remote team"} />
      <ServiceCard icon={icon3} title={"build hybrid team"} />
      <ServiceCard icon={icon4} title={"software-on-demand"} />

      
     
    
    </div>
   
    
    
  </div>
  )
}

export default Services