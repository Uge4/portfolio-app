import React from 'react';
import { Link, } from "react-router-dom";


function Footer() {
    return (
      <div className="footer">
        
        <Link id="footerLink" to="/contact" >Contact</Link>
        <a id="footerLink" href="" >Resume</a>
        <a id="footerLink" href="www.linkedin.com/in/eugeneholenstein" >LinkedIn</a>
        <a id="footerLink" href="https://github.com/Uge4" >Github</a>

      </div>
    );
  }

export default Footer;