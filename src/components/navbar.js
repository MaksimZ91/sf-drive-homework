import  React from "react";
import {NavLink} from "react-router-dom"


function Navbar (){
  return (
    <div className="nav_wrapper">
      <nav className="header__nav">
        <ul className="header__list">
        <li className="header__link"><NavLink to="/">О нас</NavLink></li>
        <li className="header__link"><a href="/">Условия</a></li>
        <li className="header__link"><NavLink to="/faq">Частые вопросы</NavLink></li>
        </ul>
      </nav>
      <button className="header__button">Войти</button>
    </div>
  )
}

export default Navbar