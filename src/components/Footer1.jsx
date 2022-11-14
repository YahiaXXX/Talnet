import React from 'react'
import styles from "../style"
import logo from "../assets/logo.svg"
import {footerLinks} from "../constants/index2"
import {socialMedia} from "../constants/index2"
import { HashLink } from 'react-router-hash-link'



function Footer1({bool,setBool,bool2,setBool2}) {
  return (
    <section className={`   bg-[#2B2B39] ${styles.flexCenter} sm:pt-16 pt-6 flex-col`}>
    <div className={` ${styles.flexStart} ${styles.boxWidth} md:flex-row flex-col  sm:mb-16 mb-6 `}>
      <div className="  w-full flex-1  md:justify-start justify-center md:mr-10 flex">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
      </div>

      <div className="  flex-[1.5] w-full flex sm:flex-row flex-col sm:gap-2 gap-10 md:justify-between justify-around flex-wrap md:mt-0 mt-10 md:mb-0 sm:mb-0 mb-10 ">
        {footerLinks.map((footerLink,i) => (
          <div
            key={i}
            className=" flex flex-col sm:items-start items-center ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className=" font-poppins font-medium text-[18px] text-white leading-[27px]">
              {footerLink.title}
            </h4>
            <ul className=" list-none mt-4 sm:text-start text-center ">
              {footerLink.links.map((link, index) => (
                <HashLink key={index} to={`${link.link}`} >
                  <li
                  onClick={()=>{setBool(prev=>!prev);setBool2(prev=>!prev)}}
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  } `}
                >
                  {link.name}
                </li>

                </HashLink>
                
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className=" bg-[#20202D]  flex w-full justify-between items-center md:flex-row flex-col py-6 border-t-[1px] px-10 " >
    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
    Copyright © 2022. Telnet .work
    </p>
    <div className="  flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) => (
        <img src={social.icon} alt={social.id} key={social.id} className={` w-[21px] h-[21px] object-contain cursor-pointer ${index!==socialMedia.length ? "mr-6"   : "mr-0"}`} />
      ))}
    </div>
  </div>
   
    
  </section>
  )
}

export default Footer1