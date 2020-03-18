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
        this.postSleep = this.postSleep.bind(this);
        this.sendBloodPressure = this.sendBloodPressure.bind(this);

        this.state = {
            previousDay: 0,
            stepsTaken: 0,
            heartRate: 0,
            bloodPressure: [0, 0],
            interval: setInterval(this.onInterval, 3000)
        }
    }
    postSleep() {
        console.log("beep");
        let updates = {
            sleep: 300 + Math.floor(Math.random() * 5 * 60),
        }
        Axios.put(`http://localhost:3000/Patient/patient/5e6c9247bee9cc271cbf3e22`, updates);
    }
    sendBloodPressure() {
        console.log("boop");
        let updates = {
            bloodPressure: [90 + Math.floor(Math.random() * 30), 60 + Math.floor(Math.random() * 20)]
        }
        Axios.put(`http://localhost:3000/Patient/patient/5e6c9247bee9cc271cbf3e22`, updates);
    }
    onInterval() {
        console.log("beep");
        var newDay = (new Date()).getDay();
        if (newDay > this.state.previousDay) {
            this.setState({
                stepsTaken: 0,
            });
        }
        this.setState({
            previousDay: newDay,
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
                    <button className="col-md-4" onClick={this.postSleep}>Patient Wakes up</button>
                    <button className="col-md-4" onClick={this.sendBloodPressure}>Take Blood Pressure</button>
                </div>
            </Router>
        )
    }
}

export default App;