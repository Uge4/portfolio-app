import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  
  return (
  
    <nav class="navbar" as="ül">

      <li>
        <NavLink
          class="active"
          to="/"
          exact
          >Home
        </NavLink>
      </li>
      
      <li>
        <NavLink
          class="active"
          to="/discover"          
          >Discover
        </NavLink>
      </li>
      
      <li>
        <NavLink
          class="active"
          to="/design"
          >Design
        </NavLink>
      </li>   

      <li> 
        <NavLink
          class="active"
          to="/develop"
          >Develop
        </NavLink>
      </li>
    
    </nav>
  )
}

export default Navbar;
