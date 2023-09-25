import React from "react";
import logo from "./assets/logo.jpg";
// import shoplog from "./assets/shoplog.jpg";


function Header(){
    return (
        <header style={{width: 100 , height: 100, backgroundColor: "green"}}> 
            <div>
                <div >
                    <img  style={{width:100 , height: 100 }}src={logo} alt="React Logo"></img>
                </div>
            </div>
        </header>
    )
}

export default Header ;