import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

class Patient extends Component {
    render() {
        return (
            <tr>
                <td> {this.props.patient.name} </td>
                <td> {this.props.patient.email} </td>
                <td> {this.props.patient.birthDate.substring(0, 10)}</td>
                <td> {this.props.patient.severity} </td>
            </tr>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patients: [],
        }
    }
    componentDidMount() {
        this.getPatients();
    }
    getPatients() {
        Axios.get('http://localhost:3000/Patient').then(res => {
            this.setState({ patients: res.data });
        }).catch((err) => {
            console.log(err);
        });
    }
    createPatientList() {
        return this.state.patients.map((patient, index) => {
            return <Patient patient={patient} key={index} />
        })
    }
    render() {
        return (
            <div className="container">
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Birth Date</th>
                                <th scope="col">Severity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.createPatientList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;