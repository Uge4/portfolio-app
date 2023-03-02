import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  
  return (
  
    <nav class="navBar" as="ül">

      <li><NavLink className="" to="/" exact >Home</NavLink></li>
      <li><NavLink className="" to="/discover" exact >Discover</NavLink></li>
      <li><NavLink className="" to="/design" exact >Design</NavLink></li>   
      <li><NavLink className="" to="/develop" exact >Develop</NavLink></li>
    
    </nav>
  )
}

export default NavBar;
