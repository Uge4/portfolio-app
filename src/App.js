import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Discover from './Discover';
import Design from './Design';
import Develop from './Develop';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
// import logo from './logo.svg'; needs to be updated

function App() {

  return (
  
    <div className="App">

      <Header />
      <NavBar />

      <Switch >

        <Router >
    
          <Route path="/discover" component={Discover}>
            <Discover />
          </Route>
        
          <Route path="/design" component={Design}>
            <Design />
          </Route>
        
          <Route path="/develop" component={Develop}>
            <Develop />
          </Route>
          
          <Route exact path="/" element={Home}>
            <Home />
          </Route>
          
        </Router>

      </Switch>

      <Footer />

      
    </div>)
}

export default App;
