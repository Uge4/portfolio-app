import './App.css'
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Discover from './Discover';
import Design from './Design';
import Develop from './Develop';
import Header from './Header';
import Footer from './Footer';
// import logo from './logo.svg'; needs to be updated

function App() {

  // toggle state
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark, setIsDark] = useState(false)
  const appClass = isDark ? "App dark" : "App light"

  function handleEvent(){
    setIsDark((isDark) => !isDark)
  }
  
  return (
  
    <div className={appClass}>

      <Header />
      

      <Switch >
    
          <Route path="/discover">
            <Discover />
          </Route>
        
          <Route path="/design">
            <Design />
          </Route>
        
          <Route path="/develop">
            <Develop />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>

      </Switch>

      <Footer />

      <button onClick={handleEvent}>{appClass}</button>

    </div>)
}

export default App;
