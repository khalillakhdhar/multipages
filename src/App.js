import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
import Nav from './layout/nav';
import {
BrowserRouter as Router,

} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
class App extends Component {
  /*
  on a une détection de routage URL <Router></Router>
  */
  render() {
  return (
    
  <Router> 
    <Nav/>
    
    <h1>Hello App</h1>
  <div>
  
  <Routes>
  <Route path="/about" element={<About/>}>
  </Route>
  <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
  </div>
  </Router>
  );
  }
  }
  export default App