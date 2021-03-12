import React from "react"
import Navbar from "../components/navbar"
import Logo from "../components/logo"
import "../styles/homeHero.css"
const Home = ()=>{
    
return(
    <div>
    <Navbar/>
    <Logo/>
    <div className="hero">
        <h1>Some filler text</h1>
    </div>
    <div className="patterns">
    </div>
    </div>

)

}
export default Home;