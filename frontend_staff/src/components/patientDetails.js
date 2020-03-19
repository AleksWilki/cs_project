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
        if (Object.keys(this.state.patient).length === 0) {
            console.log("Loading patient")
            return (
                <div>Loading</div>
            )
        } else {
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
                                                <th>Daily Heart Rate Average History (Today ->)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{Math.round(this.state.patient.heartRateAverageToday[0] * 10) / 10}</td>
                                                <td>{Math.round(this.state.patient.heartRateAverageHistory[0] * 10) / 10}</td>
                                                <td>{Math.round(this.state.patient.heartRateAverageHistory[1] * 10) / 10}</td>
                                                <td>{Math.round(this.state.patient.heartRateAverageHistory[2] * 10) / 10}</td>
                                                <td>{Math.round(this.state.patient.heartRateAverageHistory[3] * 10) / 10}</td>
                                                <td>{Math.round(this.state.patient.heartRateAverageHistory[4] * 10) / 10}</td>
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
                                                <th>Blood Pressure Daily Average History (Today ->)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{this.state.patient.bloodPressureHistory[0] ? this.state.patient.bloodPressureHistory[0][0] + ", " + this.state.patient.bloodPressureHistory[0][1] : "NaN"}</td>
                                                <td>{this.state.patient.bloodPressureHistory[1] ? this.state.patient.bloodPressureHistory[1][0] + ", " + this.state.patient.bloodPressureHistory[1][1] : "NaN"}</td>
                                                <td>{this.state.patient.bloodPressureHistory[2] ? this.state.patient.bloodPressureHistory[2][0] + ", " + this.state.patient.bloodPressureHistory[2][1] : "NaN"}</td>
                                                <td>{this.state.patient.bloodPressureHistory[3] ? this.state.patient.bloodPressureHistory[3][0] + ", " + this.state.patient.bloodPressureHistory[3][1] : "NaN"}</td>
                                                <td>{this.state.patient.bloodPressureHistory[4] ? this.state.patient.bloodPressureHistory[4][0] + ", " + this.state.patient.bloodPressureHistory[4][1] : "NaN"}</td>
                                                <td>{this.state.patient.bloodPressureHistory[5] ? this.state.patient.bloodPressureHistory[5][0] + ", " + this.state.patient.bloodPressureHistory[5][1] : "NaN"}</td>
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
                                                <th>Calorie Intake Daily Average History (Today ->)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{this.state.patient.calorieIntakeToday / 1}</td>
                                                <td>{this.state.patient.calorieIntakeHistory[0] / 1}</td>
                                                <td>{this.state.patient.calorieIntakeHistory[1] / 1}</td>
                                                <td>{this.state.patient.calorieIntakeHistory[2] / 1}</td>
                                                <td>{this.state.patient.calorieIntakeHistory[3] / 1}</td>
                                                <td>{this.state.patient.calorieIntakeHistory[4] / 1}</td>
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
                                                <th>Alcohol Intake Daily (Units) History (Today ->)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{this.state.patient.alcoholIntakeToday / 1}</td>
                                                <td>{this.state.patient.alcoholIntakeHistory[0] / 1}</td>
                                                <td>{this.state.patient.alcoholIntakeHistory[1] / 1}</td>
                                                <td>{this.state.patient.alcoholIntakeHistory[2] / 1}</td>
                                                <td>{this.state.patient.alcoholIntakeHistory[3] / 1}</td>
                                                <td>{this.state.patient.alcoholIntakeHistory[4] / 1}</td>
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
                                                <th>Steps taken Daily History (Today ->)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{this.state.patient.stepsTakenToday / 1}</td>
                                                <td>{this.state.patient.stepsTakenHistory[0] / 1}</td>
                                                <td>{this.state.patient.stepsTakenHistory[1] / 1}</td>
                                                <td>{this.state.patient.stepsTakenHistory[2] / 1}</td>
                                                <td>{this.state.patient.stepsTakenHistory[3] / 1}</td>
                                                <td>{this.state.patient.stepsTakenHistory[4] / 1}</td>
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
                                                <th>Time Slept Daily History (Today ->)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{Math.round((this.state.patient.timeSleptToday / 60) * 10) / 10}</td>
                                                <td>{Math.round((this.state.patient.timeSleptHistory[0] / 60) * 10) / 10}</td>
                                                <td>{Math.round((this.state.patient.timeSleptHistory[1] / 60) * 10) / 10}</td>
                                                <td>{Math.round((this.state.patient.timeSleptHistory[2] / 60) * 10) / 10}</td>
                                                <td>{Math.round((this.state.patient.timeSleptHistory[3] / 60) * 10) / 10}</td>
                                                <td>{Math.round((this.state.patient.timeSleptHistory[4] / 60) * 10) / 10}</td>
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