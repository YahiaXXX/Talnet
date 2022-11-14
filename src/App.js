import {BrowserRouter as Router,Route,Routes} from "react-router-dom" 
import { useEffect,useState } from "react";
import Home from "./pages/Home"
import Footer1 from "./components/Footer1";
import Jobs from "./pages/Jobs";
import styles from "./style";
import Navbar from "./components/Navbar";
import OfferDetails from "./pages/OfferDetails";
import SpontaniousApp from "./pages/SpontaniousApp";
import Talents from "./pages/Talents";
import TalentDetails from "./pages/TalentDetails";
import ContactTalent from "./pages/ContactTalent";
import About from "./pages/About";
import Services from "./pages/Services";
import AboutServices from "./pages/AboutServices";
import { getContacts } from "./services/serv";

function App() {
  const [bool,setBool]=useState(false)
  const [bool2,setBool2]=useState(false)


  useEffect(()=>{
    getContacts()
  },[])


  
  return (
     <>
     <div className="flex justify-center items-center" >
            <div className="w-full" >
              <Navbar bool={bool} setBool={setBool} bool2={bool2} />
               </div>
               </div>
        <Routes>
          <Route exact path="/" element={<Home  bool={bool}  />} />
          <Route exact path="/jobs" element={<Jobs  bool={bool} />} />
          <Route exact path="/jobs/offer" element={<OfferDetails  bool={bool} />} />
          <Route exact path="/jobs/application" element={<SpontaniousApp  bool={bool}  />} />
          <Route exact path="/talents" element={<Talents  bool={bool} />} />
          <Route exact path="/talents/details" element={<TalentDetails  bool={bool}  />} />
          <Route exact path="/talents/contact" element={<ContactTalent  bool={bool}  />} />
          <Route exact path="/about" element={<About  bool={bool}  />} />
          <Route exact path="/services" element={<Services  bool={bool} />} />
          <Route exact path="/services/more" element={<AboutServices  bool={bool} />} />

        </Routes>
        <Footer1 bool={bool} setBool={setBool} bool2={bool2} setBool2={setBool2} />
     </>
        
     
  );
}

export default App;
