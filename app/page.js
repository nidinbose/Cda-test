import Image from "next/image";
import Landing from "./Components/Homepage/Landing";
import About from "./Components/Homepage/About";
import Startup from "./Components/Homepage/Startup";
import Creators from "./Components/Homepage/Creators";
import Experts from "./Components/Homepage/Experts";
import ExpertsCarousel from "./Components/Homepage/Experts.Carosal";
import IdeaSection from "./Components/Homepage/IdeaSection";
import BlogSection from "./Components/Homepage/Blog";
import SocialSection from "./Components/Homepage/Social";
import Vlog from "./Components/Homepage/Vlog";
import PinStackSection from "./Components/Homepage/Pincard";
import Navbar from "./Components/Homepage/Navbar";
import Footer from "./Components/Homepage/Footer";

export default function Home() {
  return (
   <div className="overflow-x-hidden">
    <Navbar/>
    <Landing/>
    <About/>
    <Startup/>
    <Creators/>
    <Experts/>
   
  
  <PinStackSection/>
    <Vlog/>
    <ExpertsCarousel/>
    <IdeaSection/>
    <BlogSection/>
    <SocialSection/>
    <Footer/>

   </div>
  );  
}
