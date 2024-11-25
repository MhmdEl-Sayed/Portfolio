import { useEffect, useState } from "react"
import Header from "./Components/1-Header/Header"
import Hero from "./Components/2-Hero/Hero"
import Main from "./Components/3-Main/Main"
import Contact from "./Components/4-Contact/Contact"
import Footer from "./Components/5-Footer/Footer"


function App() {
  const [showscroll,setShowscroll]=useState(false);




  useEffect(()=>{
window.addEventListener("scroll",(params) => {
  if (window.scrollY >100) {
    setShowscroll(true)
  }else{
    setShowscroll(false)
  }
 console.log( window.scrollY >0);
 
}
)
  },[]) 
  


  return (

 
    <div>
  <div id="up"className="container">
      <Header/ >
      <Hero/>  
      <div   className="divider"/> 
      
      <Main/>  
      
      
      <div  className="divider"/>
      <Contact/>
      <div className="divider"/>
      <Footer/>
    </div>
   
    <a  style={{ opacity:showscroll? 1:0 ,transition:'0.4s'}} href="#up"
    >
        <button className="icon-angle-up scroll-top" >
    </button>
        </a>


    
   
    </div>
  )
}

export default App
