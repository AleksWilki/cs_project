import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from "./components/staffHomePage";
import Header from "./components/header";
import Patient from "./components/patientDetails";
import RegisterStaff from "./components/registerStaff";
import LoginStaff from "./components/loginStaff";
import RegisterPatient from "./components/registerPatient";

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div className="container">
                    <Redirect exact from="/" to="/login-staff" />
                    <Route path="/register-staff" component={RegisterStaff} />
                    <Route path="/login-staff" component={LoginStaff} />
                    <Route path="/register-patient" component={RegisterPatient} />
                    <Route path="/home" component={Home} />
                    <Route path="/patient-details/:id" component={Patient} />
                </div>
            </Router>
        )
    }
}

export default App;