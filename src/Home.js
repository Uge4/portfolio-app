import React from 'react'
import Discover from "./Discover"
import Design from "./Design"
import Develop from "./Develop"

function Home() {
    return (
      <div className="home">

        <Discover />
        <Design />
        <Develop />
        
      </div>
    );
  }

export default Home;