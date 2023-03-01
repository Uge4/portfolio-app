import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  
  return (
  
    <nav class="navBar" as="ül">

      <li><Link className="" to="/" exact >Home</Link></li>
      <li><Link className="" to="/discover" exact >Discover</Link></li>
      <li><Link className="" to="/design" exact >Design</Link></li>   
      <li><Link className="" to="/develop" exact >Develop</Link></li>
    
    </nav>
  )
}

export default NavBar;
