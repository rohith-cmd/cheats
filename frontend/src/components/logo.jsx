import React from "react"
import "../styles/logo.css"

const Logo = ()=>{
    return(
        <div className="logo">
            <a className="logoName" href="/">E<span><img className="logoimg" src={process.env.PUBLIC_URL + '/leaf.jpg'} alt=""/></span>ectrek</a>
        </div>
       
    )
}
export default Logo;