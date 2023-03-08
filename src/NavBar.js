import React from "react";
import { NavLink, } from "react-router-dom";


function NavBar() {
  
  return (
   
      <nav class="navBar">

        <NavLink className="navOption"  to="/" exact >Home</NavLink>
        <NavLink className="navOption" to="/discover"  >Discover</NavLink>
        <NavLink className="navOption" to="/design"  >Design</NavLink>
        <NavLink className="navOption" to="/develop"  >Develop</NavLink>
      
      </nav>
  )
}

export default NavBar;
