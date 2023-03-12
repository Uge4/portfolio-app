import React, { useState } from 'react';

function Home() {
  const [role, setRole] = useState("Product Manager")
  const roles =["Product Manager", "Marketer", "Digital Guy", "Analyst", "Designer", "Developer", "Innovator", "Creator"] 
  // let text = ""
  
  function handleClick(e){
    roles.map(text => 
      setTimeout(console.log("inside loop " + text), setRole(text)),
      10000)
  }

  return (
    <div className="home">
      <div id="hero">
        <h1>Hi, my name's Eugene, I'm a {role}.</h1>
        <h6>I like to build products that people like using. You'll stumble across some of the projects I've been involved with here, along with some stuff I've knocked up.</h6>        
        
      </div>
      <button className="showButton" onClick={handleClick} >OK, let's go &#x2192;</button>
    </div>
  );

  }

  export default Home;