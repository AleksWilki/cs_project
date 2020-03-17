import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from "./components/home";
import HR from "./components/heartRate";
import Sleep from "./components/sleep";
import BP from "./components/bloodPreasure";
import Steps from "./components/stepCounter";
import Drink from "./components/drinkIntake";
import Food from "./components/foodIntake";
import Login from "./components/login";

// <Redirect exact from="/" to="/login" /> to be added when login is working

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/home" component={Home} />
                    <Route path="/heart-rate/5e6fb4532da6544ee0990b93" component={HR} />
                    <Route path="/sleep/5e6fb4532da6544ee0990b93" component={Sleep} />
                    <Route path="/blood-preasure/5e6fb4532da6544ee0990b93" component={BP} />
                    <Route path="/step-counter/5e6fb4532da6544ee0990b93" component={Steps} />
                    <Route path="/drink-intake/5e6fb4532da6544ee0990b93" component={Drink} />
                    <Route path="/food-intake/5e6fb4532da6544ee0990b93" component={Food} />
                    <Route path="/login/5e6fb4532da6544ee0990b93" component={Login} />
                </div>
            </Router>
        )
    }
}

export default App;