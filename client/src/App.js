import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from "./component/layout/Footer";
import Navibar from "./component/layout/Navibar";
import Landing from "./component/layout/Landing";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";


function App() {
  return (
    <Router>
        <div className="App">
            <Navibar/>
            <Route exact path="/" component={Landing}/>
            <div className="container">
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
            </div>
            <Footer/>
        </div>
    </Router>
        );

}

export default App;
