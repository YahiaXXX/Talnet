import React,{useEffect} from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {useNavigate} from "react-router-dom"
import CertificationItem from '../components/CertificationItem'
import ExperienceItem from '../components/ExperienceItem'
import FormationItem from '../components/FormationItem'


function TalentDetails({bool}) {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, [bool]);
    const navigate=useNavigate()
  return (
    <div className={`flex flex-col sm:py-0 py-6 mt-20`}>
    <div className=' px-10 w-full flex justify-start items-center flex-row mt-10' >
       <AiOutlineArrowLeft onClick={()=>navigate("/jobs")} className=' h-7 w-7 cursor-pointer'/>
    </div>
<div className='flex flex-row justify-center items-center w-full' >
 <h1 className=' text-black text-center ss:text-[50px] text-[40px]' >UX / UI DESIGNER <br className=' xs:hidden block' /> - CDD / CDI</h1>
</div>
<div className=' flex flex-col px-10' >
    <div className=' flex flex-col' >
        <h3 className='text-[25px] font-semibold m-4' >Résume</h3>
        <div className=' max-w-[900px]' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum ullam porro, laboriosam in veritatis at cum consequatur eos nam corrupti eveniet facilis ea rerum error, cupiditate ut quaerat temporibus?</p>
        </div>
    </div>
    <div className=' flex flex-col' >
        <h3 className=' text-[25px] font-semibold m-4 ' >Experience</h3>
        <div className=' flex flex-col gap-2' >
        <ExperienceItem 
        title={"ALLO JIBLI"} 
        role={"UI/UX Designer"}
        start={"mars 2022"}
        end={"present"}
        place={"sidi belabbes"}
        
        />
        <ExperienceItem 
        title={"ALLO JIBLI"} 
        role={"UI/UX Designer"}
        start={"mars 2022"}
        end={"present"}
        place={"sidi belabbes"}
        
        />
        <ExperienceItem 
        title={"ALLO JIBLI"} 
        role={"UI/UX Designer"}
        start={"mars 2022"}
        end={"present"}
        place={"sidi belabbes"}
        
        />

        </div>
        
     

    </div>
    <div className=' flex flex-col' >
        <h3 className=' text-[25px] font-semibold m-4 ' >Formations</h3>
        <div  className=' flex flex-col gap-2' >
            <FormationItem 
            title={"Higher school of computer sciences"}
            subtitle={"Master of Computer Application and Software engeneering"}
            periode={"2016-2022"}
            
            />
            <FormationItem 
            title={"Higher school of computer sciences"}
            subtitle={"Master of Computer Application and Software engeneering"}
            periode={"2016-2022"}
            
            />
            <FormationItem 
            title={"Higher school of computer sciences"}
            subtitle={"Master of Computer Application and Software engeneering"}
            periode={"2016-2022"}
            
            />

        </div>
     

    </div>
    <div className=' flex flex-col' >
        <h3 className=' text-[25px] font-semibold m-4 ' >Certifications</h3>
        <div  className=' flex flex-col gap-2' >
            <CertificationItem 
            title="Frontend web developement"
            company="google"
            date="2022"
            
            />
            <CertificationItem 
            title="Frontend web developement"
            company="google"
            date="2022"
            
            />
            <CertificationItem 
            title="Frontend web developement"
            company="google"
            date="2022"
            
            />
        </div>

     

    </div>

</div>
<div className=' flex justify-end flex-row items-center my-5 px-10 ' >
    <button className=' bg-[#217BF4] py-3 px-8 rounded-md text-white' >Apply</button>
</div>


</div>
  )
}

export default TalentDetails