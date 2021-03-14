import React from "react"
import Card from "../components/card"
import Logo from "../components/logo"
import Navbar from "../components/navbar"
 
const Bike = (props)=>{
    console.log(props)
    return(
       <div>
           <Logo/>
           <Navbar/>
           <Card/>
       </div>
    )
}
export default Bike