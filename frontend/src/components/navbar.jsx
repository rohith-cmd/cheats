import React from "react"
import "../styles/nav.css"

const navbar=()=>{
    
    return(
        <nav>
            <ol className="navul">
            <li className="navli"><a href="/about">About us</a></li>
            <li className="navli"><a href="/">Home</a></li>
            <li className="navli cta"><a href="/cta">Try now!</a></li>
            </ol>
        </nav>
    )

}
export default navbar;