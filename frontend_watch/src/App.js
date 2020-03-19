import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HR from "./components/heartRate";
import BP from "./components/bloodPreasure";
import Steps from "./components/stepCounter";
import Login from "./components/login";

const Axios = axios.create({
    withCredentials: true
});

class App extends Component {
    constructor(props) {
        super(props);

        this.onInterval = this.onInterval.bind(this);
        this.postSleep = this.postSleep.bind(this);
        this.sendBloodPressure = this.sendBloodPressure.bind(this);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            userId: '',
            previousDay: 0,
            stepsTaken: 0,
            heartRate: 0,
            bloodPressure: [0, 0],
            interval: {},
        }
    }
    postSleep() {
        let updates = {
            sleep: 300 + Math.floor(Math.random() * 5 * 60),
        }
        if (this.state.userId !== '') {
            console.log("sleep sent to", this.state.userId);
            Axios.put(`http://localhost:3000/Patient/patient/${this.state.userId}`, updates);
        }
    }
    sendBloodPressure() {
        this.setState({
            bloodPressure: [90 + Math.floor(Math.random() * 30), 60 + Math.floor(Math.random() * 20)]
        }, () => {
            let updates = {
                bloodPressure: this.state.bloodPressure
            }
            if (this.state.userId !== '') {
                console.log("bp sent to", this.state.userId, updates);
                Axios.put(`http://localhost:3000/Patient/patient/${this.state.userId}`, updates);
            }
        });
    }
    onInterval() {
        var newDay = (new Date()).getDay();
        if (newDay > this.state.previousDay) {
            this.setState({
                stepsTaken: 0,
            });
        }
        this.setState({
            previousDay: newDay,
            stepsTaken: this.state.stepsTaken + 2,
            heartRate: 60 + Math.floor(Math.random() * 40),
        }, () => {
            let updates = {
                stepsTaken: this.state.stepsTaken,
                heartRate: this.state.heartRate,
            }
            if (this.state.userId !== '') {
                console.log("hr/steps sent to", this.state.userId);
                Axios.put(`http://localhost:3000/Patient/patient/${this.state.userId}`, updates);
            }
        });

    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    login() {
        Axios.get('http://localhost:3000/Patient/details').then(res => {
            console.log("res2", res)
            this.setState({
                userId: res.data._id,
                interval: setInterval(this.onInterval, 6000),
            })
        }).catch(err => {
            console.log("err", err);
        })

        this.setState({
            email: '',
            password: '',
        })
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <Redirect exact from="/" to="/login" />
                    <Route path="/login" component={(props) => <Login {...props} login={this.login} />} />
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