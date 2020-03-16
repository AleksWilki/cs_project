import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from "./components/staffHomePage";
import Header from "./components/header";
import Patient from "./components/patientDetails";


// <Redirect exact from="/" to="/login" /> to be added when login is working

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div className="container">
                    <Route path="/home" component={Home} />
                    <Route path="/patient-details" component={Patient} />
                </div>
            </Router>
        )
    }
}

export default App;