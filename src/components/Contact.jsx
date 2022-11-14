import React,{ useRef,useEffect } from 'react'
import layout from "../style"
import styles from "../style"
import vect from "../assets/vector.svg"
import facebook from "../assets/Shape.svg"
import twitter from "../assets/Shape (1).svg"
import mail from "../assets/Message.svg"
import instagram from "../assets/Instagram.svg"
import emailjs from '@emailjs/browser';

function Contact() {
   const form = useRef()
   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
         process.env.REACT_APP_EMAIL_JS_SERVICE,
          process.env.REACT_APP_EMAIL_JS_TEMPLATE ,
           form.current ,
           process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
            e.target.reset()
        });
    };
   
   
  return (
    <section
    id="contact"
    className={`  flex sm:flex-row flex-col sm:justify-between justify-center ${styles.paddingY} mt-40  md:ml-20 ml-10  `}
  >
   <div className='z-[1] flex flex-col flex-1 ' >
   <div className='  w-full flex sm:justify-start justify-center sm:mb-5 mb-4' >
      <h1 className='text-white font-poppins text-[40px]' >Contact Us</h1>
    </div>
    
   <div
      className={`flex-1 flex justify-center sm:items-start items-center flex-col xl:px-0 sm:px-16 px-6`}
    >
      <form ref={form} onSubmit={sendEmail} className=' flex flex-col ' >
          <input type="text" name="name" placeholder='Your Full Name' required className=' outline-none rounded-sm bg-transparent border-solid border-[1px] sm:py-3 py-2 sm:px-10 px-6 mb-4 text-white ' />
          <input type="email" name='email' placeholder='Your Email' required className=' outline-none  rounded-sm bg-transparent border-solid border-[1px] py-3 px-10 mb-4 text-white' />
          <textarea name="message"  rows="7" placeholder='Your Message' required className=' outline-none  rounded-sm resize-none border-solid border-[1px] bg-transparent py-6 px-10 mb-6 text-white' ></textarea>
          <button type='submit' className=' px-10 py-4 rounded-md bg-[#0849A0] text-white font-bold' >Send Message</button>

        </form>
      
    </div>

    
    
    </div> 
    <div className='z-[1] sm:justify-start justify-center flex flex-col flex-1 sm:mt-20 mt-0 ' >
      <div className=' flex sm:justify-start justify-center items-center  mb-10 px-5 w-[100%]' >
        <h3 className=' text-white text-base' >Information technologies building, <br/>visit us in our social media accounts</h3>
      </div>
      <div className=' grid sm:grid-cols-1 grid-cols-2 sm:gap-5 gap-2 ' >
         <div className=' flex flex-row   ' >
            <img src={vect} alt="whatsapp" className=' h-6 w-6 mr-5' />
            <p  className=' text-white' >+213 081-1236-4568</p>
         </div>
         <div className='  flex flex-row  ' >
            <img src={mail} alt="whatsapp" className='h-6 w-6 mr-5' />
            <p  className=' text-white ' >hello@info.com.ng</p>
         </div>
         <div className=' flex flex-row   ' >
            <img src={instagram} alt="whatsapp" className='h-6 w-6 mr-5' />
            <p  className=' text-white ' >Telnet.19</p>
         </div>
         <div className='  flex flex-row  ' >
            <img src={facebook} alt="whatsapp" className='h-6 w-6 mr-5' />
            <p  className=' text-white' >Telnet_Work</p>
         </div>
         <div className='  flex flex-row   ' >
            <img src={twitter} alt="whatsapp" className='h-6 w-6 mr-5' />
            <p  className=' text-white ' >Telnet work</p>
         </div>
         
         
      </div>

    </div>
   
  
    
    
  </section>
  )
}

export default Contact