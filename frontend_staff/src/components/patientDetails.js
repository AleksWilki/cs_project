import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Axios from 'axios';

const patientUrl = "http://localhost:3000/Patient/";
class patientDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patients: [],
            filterName: '',
            filterEmail: '',
            filterSeverity: '',
            filterAppointment: ''
        }
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