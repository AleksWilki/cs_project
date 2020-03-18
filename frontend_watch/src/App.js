import React, { Component } from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HR from "./components/heartRate";
import BP from "./components/bloodPreasure";
import Steps from "./components/stepCounter";

class App extends Component {
    constructor(props) {
        super(props);

        this.onInterval = this.onInterval.bind(this);

        this.state = {
            stepsTaken: 0,
            heartRate: 0,
            bloodPressure: [0, 0],
            interval: setInterval(this.onInterval, 3000)
        }
    }
    onInterval() {
        console.log("beep");
        this.setState({
            stepsTaken: this.state.stepsTaken + 1,
            heartRate: 60 + Math.floor(Math.random() * 40),
        });
        let updates = {
            stepsTaken: this.state.stepsTaken,
            heartRate: this.state.heartRate,
        }
        Axios.put(`http://localhost:3000/Patient/patient/5e6c9247bee9cc271cbf3e22`, updates);
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <Redirect exact from="/" to="/heart-rate" />
                    <Route path="/heart-rate" component={(props) => <HR {...props} heartRate={this.state.heartRate} />} />
                    <Route path="/blood-preasure" component={(props) => <BP {...props} bloodPressure={this.state.bloodPressure} />} />
                    <Route path="/step-counter" component={(props) => <Steps {...props} stepsTaken={this.state.stepsTaken} />} />
                </div>
            </Router>
        )
    }
}

export default App;