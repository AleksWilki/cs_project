import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Axios from 'axios';

class patientDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forname: '',
            surname: '',
            email: '',
            birthDate: '',
            severity: '',
            appointmentBooked: '',
            age: '',
            PrevAppoint: '',
            NextAppoint: '',
            MonitorReas: '',
            Allergies: '',
            HomePhone: '',
            Mobile: '',
            registerDate: '',
            symptoms: [],
            heartRate: [],
            bloodPreasure: [],
            calorieIntake: [],
            alcoholIntake: [],
            stepsTaken: [],
            timeSlept: [],

        }
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        console.log({id});
        Axios.get (`http://localhost:3000/Patient/patient/${id}`).then(res => {
            this.setState({forname: res.data.forname,
            surname: res.data.surname,
            email: res.data.email,
            birthDate: res.data.birthDate,
            severity: res.data.severity,
            appointmentBooked: res.data.appointmentBooked,
            age: res.data.age,
            PrevAppoint: res.data.PrevAppoint,
            NextAppoint: res.data.NextAppoint,
            MonitorReas: res.data.MonitorReas,
            Allergies: res.data.Allergies,
            HomePhone: res.data.HomePhone,
            Mobile: res.data.Mobile,
            registerDate: res.data.registerDate,
            symptoms: res.data.symptoms,
            heartRate: res.data.heartRate,
            bloodPreasure: res.data.bloodPreasure,
            calorieIntake: res.data.calorieIntake,
            alcoholIntake: res.data.alcoholIntake,
            stepsTaken: res.data.stepsTaken,
            timeSlept: res.data.timeSlept});
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <div className="card card-default">
                    <div className="card-header"><strong>Patient Name here</strong></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Forname</th>
                                            <th>Surname</th>
                                            <th>Age</th>
                                            <th>Prev Appt date</th>
                                            <th>Next Appt Date</th>
                                            <th>Risk Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.forname}</td>
                                            <td>{this.state.surname}</td>
                                            <td>{this.state.age}</td>
                                            <td>{this.state.PrevAppoint}</td>
                                            <td>{this.state.NextAppoint}</td>
                                            <td>{this.state.severity}</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Reasons for Monitor</th>
                                            <th>Allergies</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.MonitorReas}</td>
                                            <td>{this.state.Allergies}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Home Phone</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.HomePhone}</td>
                                            <td>{this.state.Mobile}</td>
                                            <td>{this.state.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Symptoms</th>
                                            <th>Heart Rate</th>
                                            <th>Blood Preasure</th>
                                            <th>Calorie Intake</th>
                                            <th>Alcohol Intake</th>
                                            <th>Steps taken</th>
                                            <th>Time Slept</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.symptoms}</td>
                                            <td>{this.state.heartRate}</td>
                                            <td>{this.state.bloodPreasure}</td>
                                            <td>{this.state.calorieIntake}</td>
                                            <td>{this.state.alcoholIntake}</td>
                                            <td>{this.state.stepsTaken}</td>
                                            <td>{this.state.timeSlept}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>                    
                    </div>
                </div>
                <div style={backBtn}>
                    <Link to="/home"> <button type="button" className="btn btn-primary" style={button}> Back </button></Link>
                </div>
            </div>
        )
    }
}

const backBtn = {
    margin: "auto",
    textAlign: "center",
    padding: "20px",
}

const button = {
    width: "110px",
    height: "50px",
    fontSize: "24px"
}

export default patientDetails;