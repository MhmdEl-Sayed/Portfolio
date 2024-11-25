import  { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [men, setMen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentid"));
 

    useEffect(()=>{
      if(theme==="dark"){
        document.body.classList.add("light")
        document.body.classList.remove("dark")
      }else{
        document.body.classList.add("dark")
        document.body.classList.remove("light")
      }
   
    },[theme])
  
  return (
    <header className=" flex">
      <button
        onClick={() => {
          setMen(true);
        }}
        className="icon-menu flex"
      >
       
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About </a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">speaking</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
      <button
      onClick={() => {
        // senddata
        localStorage.setItem("currentid",theme==="dark"? "light":"dark")
        
        setTheme(localStorage.getItem("currentid"));
      }
      }
      className="modes flex ">
        
         {theme === "light" ? <i className="icon-moon-o"></i> :<i className="icon-adjust-brightness"></i>}
        
      </button>

      {men && (
        <div className=" fixed">
          <ul className="model ">
            <li >
           <button className="icon-close"
           onClick={() => {
            setMen(false);
          }}/>
            
           
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Article</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Users</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
