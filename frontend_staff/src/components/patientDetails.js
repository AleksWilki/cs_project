import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Axios from 'axios';

class patientDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patient: {}
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log({ id });
        Axios.get(`http://localhost:3000/Patient/patient/${id}`).then(res => {
            this.setState({ patient: res.data });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <div className="card card-default">
                    <div className="card-header"><strong>{this.state.patient.name + "'s Details"}</strong></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Birth Date</th>
                                            <th>Appointment Booked</th>
                                            <th>Next Appt Date</th>
                                            <th>Risk Severity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.patient.name}</td>
                                            <td>{this.state.patient.birthDate ? this.state.patient.birthDate.substring(0, 10) : ""}</td>
                                            <td>{this.state.patient.appointmentBooked ? "yes" : "no"}</td>
                                            <td>{this.state.patient.appointmentDate}</td>
                                            <td>{this.state.patient.severity}</td>
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
                                            <th>Symptoms</th>
                                            <th>Allergies</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.patient.symptoms}</td>
                                            <td>{this.state.patient.allergies}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Phone Number</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.patient.phoneNumber}</td>
                                            <td>{this.state.patient.email}</td>
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
                                            <th>Heart Rate</th>
                                            <th>Blood Pressure</th>
                                            <th>Calorie Intake</th>
                                            <th>Alcohol Intake</th>
                                            <th>Steps taken</th>
                                            <th>Time Slept</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.patient.heartRateAverageToday ? Math.round(this.state.patient.heartRateAverageToday[0] * 10) / 10 : "0"}</td>
                                            <td>{this.state.patient.bloodPressureHistory && this.state.patient.bloodPressureHistory[0] ? this.state.patient.bloodPressureHistory[0][0] + ", " + this.state.patient.bloodPressureHistory[0][1] : "0, 0"}</td>
                                            <td>{this.state.patient.calorieIntakeToday}</td>
                                            <td>{this.state.patient.alcoholIntakeToday}</td>
                                            <td>{this.state.patient.stepsTakenToday}</td>
                                            <td>{Math.round((this.props.sleep / 60) * 10) / 10}</td>
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