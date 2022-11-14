import instagram from "../assets/instagram copy.svg"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import {AiOutlineHome} from "react-icons/ai"
import {CgWorkAlt} from "react-icons/cg"
import {BsPersonCheck} from "react-icons/bs"
import {MdOutlineMedicalServices} from "react-icons/md"
import {AiOutlineInfoCircle} from "react-icons/ai"



export const navLinks = [
    {
      lien: "",
      title: "Home",
      hero:"heroHome",
      icon:AiOutlineHome
    },
    {
      lien: "jobs",
      title: "Jobs",
      hero:"heroJobs",
      icon:CgWorkAlt
    },
    {
      lien: "talents",
      title: "Talents",
      hero:"heroTalents",
      icon: BsPersonCheck
    },
    {
      lien:"services",
      title:"Services",
      hero:"heroServices",
      icon:MdOutlineMedicalServices
    },
    {
      lien: "about",
      title: "About us",
      hero:"heroAbout",
      icon:AiOutlineInfoCircle
    },
  ];

  export const footerLinks = [
    {
      title: "Quick links",
      links: [
        {
          name: "Spontaneous application",
          link: "/jobs/application",
          hero:"spontaniousapplication"
        },
        {
          name: "About Us",
          link: "/about",
          hero:"heroAbout"
        },
        {
          name: "Jobs",
          link: "/jobs",
          hero:""
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          name: "Remote team",
          link: "/services/more",
          hero:"aboutservices"
        },
        {
          name: "insite-team",
          link: "/services/more",
          hero:"aboutservices"
        },
        {
          name: "software-on-demand",
          link: "/services/more",
          hero:"aboutservices"
        },
       
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];
  