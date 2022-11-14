import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useMutation, gql } from '@apollo/client';
import { useEffect } from 'react';

function SpontaniousAppcomp() {
    const navigate=useNavigate()
    const [bool,setBool]=useState(false)
    const [form,setForm]=useState({
        domain:"",
        speciality:"",
        level:"",
        cv:""
    })
    const [cv,setCv] = useState({})
    useEffect(()=>{
      setCv(document.getElementById('cv').files[0]);
    },[bool])
   
    
    const MUTATION = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      success
    }
  }
`;
    const query=gql`
    mutation CreateSpontaniousapplication($domain: String!, $speciality: String!, $experience: String!,$cv:Upload!) {
        createSpontaniousapplication(
          data: {domain:$domain,speciality:$speciality,experience:$experience,cv:$cv}
        ) {id}
      }
    `
    const [createFile]=useMutation(MUTATION)

    function submitUpload() {
     createFile({ variables: { file:cv } });
     console.log("sent")
    
    };



    const [createApplication] = useMutation(query, {
        variables:{
          domain:form.domain,
          speciality:form.speciality,
          experience:form.level,
          
      
        }
      });

      const submitApplication=(e)=>{
        e.preventDefault();
        createApplication();
        // createFile();
      }

      
  return (
    <section id="spontaniousapplication" className={`flex flex-col justify-center items-center sm:py-0 py-6 mt-10`}>
    <div className=' md:px-10 px-0 w-full flex justify-start items-center flex-row' >
       <AiOutlineArrowLeft onClick={()=>navigate("/jobs#heroJobs")} className=' h-7 w-7 cursor-pointer'/>
    </div>
<div className='flex flex-row justify-center items-center text-center w-full' >
 <h1 className=' text-black ss:text-[50px] text-[40px]' >spontaneous applicantion</h1>
</div>
<div className=' flex justify-center text-center items-center md:w-[80%] w-[100%] mt-10' >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus magni sapiente culpa quos numquam hic asperiores. Praesentium autem libero eos ipsum, quibusdam a temporibus reprehenderit corporis quod facilis. Ea?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus magni sapiente culpa quos numquam hic asperiores. Praesentium autem libero eos ipsum, quibusdam a temporibus reprehenderit corporis quod facilis. Ea?</p>
</div>

<div className=' flex flex-col justify-center items-center gap-4 mt-10' >
    <div className=' flex flex-col justify-start items-start w-full' >
    <label className=' font-semibold' htmlFor="">Domain:*</label>
    <select value={form.domain} onChange={(e)=>setForm({...form,domain:e.target.value})} placeholder='Select the domain' className=' mt-2 py-3 sm:px-20 px-10  w-[100%]   border outline-none' name="" id="">
        <option value=""></option>
        <option value="Graphic design">Graphic design</option>
        <option value="Software engineering">Software engineering</option>
        <option value="Domain 2">Domain 2</option>
        <option value="Domain 3">Domain 3</option>
    </select>

    </div>
    <div className=' flex flex-col justify-start items-start w-full' >
    <label className=' font-semibold' htmlFor="">Speciality:*</label>
    <select value={form.speciality} onChange={(e)=>setForm({...form,speciality:e.target.value})} placeholder='Select your Speciality' className=' mt-2 py-3 w-[100%] sm:px-20 px-10   border outline-none' name="" id="">
    <option value=""></option>
        <option value="UX/UI">UX/UI</option>
        <option value="Motetion Graphic">Motetion Graphic</option>
        <option value="sotial media">sotial media</option>
        <option value="proposition 3">proposition 3</option>
    </select>

    </div>
    <div className=' flex flex-col justify-start items-start w-full' >
    <label className=' font-semibold' htmlFor="">Experience level:*</label>
    <select value={form.level} onChange={(e)=>setForm({...form,level:e.target.value})} placeholder='what is your experiance' className=' mt-2 py-3 w-[100%]  sm:px-20 px-10 border outline-none' name="" id="">
    <option value=""></option>
    <option value="internship">internship</option>
    <option value="entry level">entry level</option>
    <option value="associate">associate</option>
    <option value="senior">senior</option>
    <option value="executive">executive</option>
    </select>

    </div>
    
</div>

<div className=' flex justify-end flex-row items-center mt-5' >
    <input value={cv} id="cv" onChange={(e)=>{setBool(prev=>!prev)}} type="file" className='  py-3 md:px-40 px-20 rounded-md text-white' />
</div>

<div className=' flex justify-end flex-row items-center mt-5' >
    <button onClick={(e)=>submitUpload()} className=' bg-[#217BF4] py-3 md:px-40 px-20 rounded-md text-white' >upload</button>
</div>

<div className=' flex justify-end flex-row items-center mt-5' >
    <button onClick={(e)=>submitApplication(e)} className=' bg-[#217BF4] py-3 md:px-40 px-20 rounded-md text-white' >Apply</button>
</div>


</section>
  )
}

export default SpontaniousAppcomp