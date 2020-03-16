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

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/home" component={Home} />
                    <Route path="/heart-rate" component={HR} />
                    <Route path="/sleep" component={Sleep} />
                    <Route path="/blood-preasure" component={BP} />
                    <Route path="/step-counter" component={Steps} />
                    <Route path="/drink-intake" component={Drink} />
                    <Route path="/food-intake" component={Food} />
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        )
    }
}

export default App;