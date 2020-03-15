import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HR from "./components/heartRate";
import BP from "./components/bloodPreasure";
import Steps from "./components/stepCounter";
import Sleep from "./components/sleep";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Redirect exact from="/" to="/heart-rate" />
                    <Route path="/heart-rate" component={HR} />
                    <Route path="/blood-preasure" component={BP} />
                    <Route path="/step-counter" component={Steps} />
                    <Route path="/sleep" component={Sleep} />
                </div>
            </Router>
        )
    }
}

export default App;