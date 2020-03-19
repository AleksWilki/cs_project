import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from "./components/home";
import HR from "./components/heartRate";
import Sleep from "./components/sleep";
import BP from "./components/bloodPreasure";
import Steps from "./components/stepCounter";
import Drink from "./components/drinkIntake";
import Food from "./components/foodIntake";
import Login from "./components/login";
import axios from 'axios';

const Axios = axios.create({
    withCredentials: true
});

class App extends Component {
    constructor(props) {
        super(props);

        this.updateUser = this.updateUser.bind(this);
        this.refreshUser = this.refreshUser.bind(this);

        this.state = {
            details: {}
        }
    }
    updateUser() {
        console.log("updating")
        Axios.get('http://localhost:3000/Patient/details').then(res => {
            console.log("updateRes:", res.data)
            this.setState({ details: res.data });
            setInterval(this.refreshUser, 5000);
        }).catch((err) => {
            console.log(err)
        })
    }
    refreshUser() {
        console.log("refreshing")
        Axios.get('http://localhost:3000/Patient/details').then(res => {
            this.setState({ details: res.data });
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <Router>
                <div className="container">
                    
                    <Route path="/home" component={Home} />
                    <Route path="/heart-rate" component={(props) => <HR {...props} heartRate={this.state.details.heartRateAverageToday} />} />
                    <Route path="/sleep" component={(props) => <Sleep {...props} sleep={this.state.details.timeSleptToday} />} />
                    <Route path="/blood-preasure" component={(props) => <BP {...props} bloodPressure={this.state.details.bloodPressureHistory ? this.state.details.bloodPressureHistory[0] : undefined} />} />
                    <Route path="/step-counter" component={(props) => <Steps {...props} steps={this.state.details.stepsTakenToday} />} />
                    <Route path="/drink-intake" component={(props) => <Drink {...props} userId={this.state.details._id} />} />
                    <Route path="/food-intake" component={(props) => <Food {...props} userId={this.state.details._id} />} />
                    <Route path="/login" component={(props) => <Login {...props} updateUser={this.updateUser} />} />
                </div>
            </Router>
        )
    }
}

export default App;