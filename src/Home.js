import React, {useState} from 'react'

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
      <h3>Hi, my name's Eugene, I'm a {role} with many passions, some of which you might stumbled across here.</h3>        
      <button onClick={handleClick}>click me</button>
    </div>
  );

  }

  export default Home;