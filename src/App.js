import React from 'react';
import logo from './logo.svg';
import './Custom.css';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navigationbar from "./components/navigationbar.component";
import Home from "./components/home.component";
import Membership from "./components/membership.component";
import Coaching from "./components/coaching.component";
import Court_Hire from "./components/court_hire.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <div>
        <Router className="col-12">
            <Navigationbar />
            <br/>
            <Route path="/" exact component={Home} />
            <Route path="/membership" component={Membership} />
            <Route path="/coaching" component={Coaching} />
            <Route path="/court_hire" component={Court_Hire} />
            <Footer className="col-12"/>
        </Router>
    </div>
  );
}

export default App;
