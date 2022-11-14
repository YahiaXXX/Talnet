import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useMutation, gql } from '@apollo/client';
import {gql as gql2, } from "graphql-request"

function TalentForm() {
    const navigate=useNavigate()
    const [form,setForm]=useState({
      name:"",
      company:"",
      email:"",
      country:"",
      speciality:"",
      message:""

    })
    const query = gql`
    mutation CreateContact($name: String!, $email: String!, $company: String!, $speciality: String!,$message: String!,$country: String!) {
      createContact(data: {name: $name, company: $company, email: $email, country:$country, speciality: $speciality, message: $message}) { id }
    }
  ` 
    const [createContact] = useMutation(query, {
      variables:{
        name:form.name,
        company:form.company,
        email:form.email,
        country:form.country,
        speciality:form.speciality,
        message:form.message
    
      }
    });

    const handleSubmit= async (e)=>{
      e.preventDefault();
      createContact().then(res=>{console.log(res);setForm({name:"",
      company:"",
      email:"",
      country:"",
      speciality:"",
      message:""})});
     
    }

  return (
    <section id="talentform" className={`flex flex-col justify-center items-center sm:py-0 py-6 mt-10`}>
    <div className=' md:px-10 px-0 w-full flex justify-start items-center flex-row' >
       <AiOutlineArrowLeft onClick={()=>navigate("/jobs#heroJobs")} className=' h-7 w-7 cursor-pointer'/>
    </div>
<div className='flex flex-row justify-center items-center text-center w-full' >
 <h1 className=' text-black ss:text-[50px] text-[40px]' >contact us for talent</h1>
</div>
<div className=' flex justify-center text-center items-center md:w-[80%] w-[100%] mt-10' >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus magni sapiente culpa quos numquam hic asperiores. Praesentium autem libero eos ipsum, quibusdam a temporibus reprehenderit corporis quod facilis. Ea?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus magni sapiente culpa quos numquam hic asperiores. Praesentium autem libero eos ipsum, quibusdam a temporibus reprehenderit corporis quod facilis. Ea?</p>
</div>


    <div className=' gap-4 mt-10 flex flex-col justify-center items-center w-full' >
    <form onSubmit={handleSubmit}  className=' flex flex-col w-full justify-center items-center ' >
          <input value={form.name}  onChange={(e)=>setForm({...form,name:e.target.value})} type="text" name="name" placeholder='First name Last name*' required className=' px-4 outline-none rounded-sm bg-transparent border-solid border-[1px] border-black sm:py-3 py-2 sm:w-[40%] md:[30%] w-full mb-4 text-[#616161] ' />
          <input value={form.company} onChange={(e)=>setForm({...form,company:e.target.value})} type="text" name='company' placeholder='Company name*' required className=' px-4  outline-none  rounded-sm bg-transparent border-solid border-[1px] border-black py-3 sm:w-[40%] md:[30%] w-full mb-4 text-[#616161]' />
          <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} type="email" name='email' placeholder='Email Addresse*' required className=' px-4  outline-none  rounded-sm bg-transparent border-solid border-[1px] border-black py-3 sm:w-[40%] md:[30%] w-full mb-4 text-[#616161]' />
          <input value={form.country} onChange={(e)=>setForm({...form,country:e.target.value})} type="text" name='country' placeholder='Country*' required className=' px-4  outline-none  rounded-sm bg-transparent border-solid border-[1px] border-black py-3 sm:w-[40%] md:[30%] w-full mb-4 text-[#616161]' />
          <select value={form.speciality} onChange={(e)=>setForm({...form,speciality:e.target.value})} placeholder='Select your Speciality' className='mb-4 py-3 px-4   border-black sm:w-[40%] md:[30%] w-full  border outline-none' name="" id="">
                    <option value=""></option>
                    <option value="UX/UI">UX/UI</option>
                    <option value="Motetion Graphic">Motetion Graphic</option>
                    <option value="social media">social media</option>
                    <option value="proposition 3">proposition 3</option>
    </select>
          <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} name="message"  rows="7" placeholder='Your Message' required className=' px-4  border-black outline-none  rounded-sm resize-none border-solid border-[1px] bg-transparent py-6 sm:w-[40%] md:[30%] w-full mb-6 text-[#616161]' ></textarea>
          <div className=' flex justify-center flex-row items-center mt-5' >
      <button type='submit' className=' bg-[#217BF4] py-3 md:px-40 px-20 rounded-md text-white' >Apply</button>
</div>

        </form>
        

    
   
   
   
   
   
   
   
    
    
</div>




</section>
  )
}

export default TalentForm