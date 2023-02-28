import './App.css'
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Home";
import Discover from "./Discover";
import Design from "./Design";
import Develop from "./Develop";
// import logo from './logo.svg'; needs to be updated

function App() {
  return (
    <div className="App">
      
      <Header />
    
      <Router >
          <Navbar>        
          
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/discover">
              <Discover />
            </Route>
            
            <Route exact path="/design">
              <Design />
            </Route>

            <Route exact path="/develop">
              <Develop />
            </Route>

          </Navbar>    
      </Router>
    
      
    </div>
  );
}

export default App;
