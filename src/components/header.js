import  React from "react";
import Logo from "./logo"
import Navbar from "./navbar"

function Header (){
      return (
      <>
        <header className="header">
          <Logo/>
          <Navbar/>
          <img className="header__mobile_menu" src="../src/img/mobile_menu.svg" alt="mobile_menu"></img>
        </header>
      </>
    );  
}

export default Header