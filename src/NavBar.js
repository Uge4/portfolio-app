import React from "react";
import { NavLink, Link } from "react-router-dom";


function NavBar() {
  
  return (

    <div id="navDiv">
      <Link className="homeIcon" to="/">
        <img src="./images/homeIcon.png" alt="home" />
      </Link>
      <nav class="navBar">
          <NavLink className="navOption" to="/discover"  >Discover</NavLink>
          <NavLink className="navOption" to="/design"  >Design</NavLink>
          <NavLink className="navOption" to="/develop"  >Develop</NavLink>
          
        
        </nav>
      </div>
  )
}

export default NavBar;
