import React from 'react';
import logo from './logo.svg';
import './Custom.css';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navigationbar from "./components/navigationbar.component";
import Home from "./components/home.component";
import About from "./components/about.component";
import Membership from "./components/membership.component";
import Contact from "./components/contact.component";


function App() {
  return (
    <Router>
        <Navigationbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/membership" component={Membership} />
        <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
