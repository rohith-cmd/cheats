import React from "react"
import Navbar from "../components/navbar"
import Logo from "../components/logo"
import "../styles/homeHero.css"
import {Link} from "react-router-dom"


const Home = ()=>{
    
return(
    <div>
    <Navbar/>
    
    <Logo/>
    <div className="hero">
      <h1>One small step towards making our world a better place.
        </h1> 
    </div>
    <div className="patterns">
    </div>
    <Link to = {{
      pathname:"/search"
    }
    }>
    <button className="cta-button">Take me there</button>
    </Link>
    <img  className="car" src={process.env.PUBLIC_URL + "/car.png"} alt=""/>
    </div>
  
)

}
export default Home;