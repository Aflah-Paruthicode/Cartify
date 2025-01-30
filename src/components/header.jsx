
import React from "react";

function Header () {

    return (
        <header className="header-root">
            <div className="logo">
                <img src="logo-no-background.png" alt="" />
            </div>
            <div className="menu">
                <h1><i class="fa-solid fa-bars" style={{color:"white"}} ></i></h1>
            </div>
        </header>
    )
}

export default Header