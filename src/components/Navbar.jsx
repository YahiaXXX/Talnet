import React, { useState,useEffect } from "react";
import { navLinks } from "../constants/index2";
import  menu from "../assets/menu.svg";
import  close from "../assets/close.svg";
import  logo  from "../assets/logo.svg";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const NavBarItem = ({item,lien, title, classprops,handleClick }) => (
  <li className={`mx-4 w-full cursor-pointer ${classprops}`}>
    <NavLink 
      key={title}
      to={lien}
      className="flex flex-row gap-4 justify-start items-center my-8 text-sm font-medium text-white hover:text-cyan-400"
      onClick={()=>handleClick && handleClick()}
      >   
        <item.icon className="w-6 h-6 object-contain mr-2" />
        {title}
      </NavLink>
  </li>
);


function Navbar({bool,setBool,bool2}) {

  const location=useLocation()
    const [toggle, setToggle] = useState(false);
    const [selected,setSelected] = useState(0)
    const navigate=useNavigate()
    useEffect(()=>{
      if(location.pathname==="/"){
        setSelected(0)
      }
      if(location.pathname.includes("/jobs")){
        setSelected(1)
      }
      
      if(location.pathname==="/about"){
        setSelected(4)
      }

    },[bool2])
    

  //   const changeLocation=(placeToGo)=>{
  //     navigate(placeToGo, { replace: true });
  //     window.location.reload();
  // }
    return (
      <nav className=" z-[5] navbg  fixed w-full flex py-4 md:px-20 px-6 justify-between items-center border-b-[1px]">
        <div className="flex flex-row flex-1 items-center" >
        <div className="flex justify-center items-center flex-2" >
        <img src={logo} alt="hoobank" className=" w-[124px] h-[50px]" />
        </div>
        
        <ul className=" list-none md:flex hidden justify-center items-center flex-[0.6]">
          {navLinks.map((item, index) => (
            <li
              onClick={()=>{setSelected(index);setBool(!bool)}}
              key={index}
              className={`font-inter font-normal cursor-pointer ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-[16px] text-[#2B2B39] ${index===selected  ? "font-bold"  :"" } `}
            >
              <HashLink  to={`/${item.lien}`} smooth >{item.title}</HashLink>
            </li>
          ))}
        </ul>
        </div>
        
         <HashLink to="/#contact" smooth >
         <button className="sm:flex hidden mr-2 flex-2 px-10 py-3 bg-[#217BF4] rounded-md cursor-pointer text-white" >Contact Us</button>
         </HashLink> 
       
        
        {/* <div className=" sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" w-[40px] h-[40px] object-contain" 
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
             <ul className=" list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((item, index) => (
            <li
              key={item.id}
              className={`font-poppins font-normal cursor-pointer ${
                index === navLinks.length - 1 ? "mb-0" : "mb-10"
              } text-[16px] text-white `}
            >
              <a href={`#${item.id}`}> {item.title} </a>
            </li>
          ))}
        </ul>
          </div>
        </div> */}
        <div className="flex relative">
        {toggle ? (
          <AiOutlineClose
            fontSize={28}
            className="text-black md:hidden cursor-pointer "
            onClick={()=>setToggle(false)}
          />
        ) : (
          <HiMenuAlt4
          fontSize={28}
            className="text-black md:hidden cursor-pointer "
            onClick={()=>setToggle(true)}
          />
        )}
        { toggle && (
          <ul className=" z-[10] fixed top-0 -left-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
           flex flex-col justify-start items-center rounded-md bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg text-white animate-slideright" >
            {navLinks.map((item, index) => (
          <NavBarItem  item={item} handleClick={()=>setToggle(false)} lien={item.lien} key={index} title={item.title} classprops="my-2 text-lg" />
        ))}
          </ul>
        )

        }
      </div>
      </nav>
    );
  }
  
  export default Navbar;