import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

const patientUrl = "http://localhost:3000/Patient/"

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

        this.filterName = this.filterName.bind(this);
        this.filterEmail = this.filterEmail.bind(this);
        this.filterSeverity = this.filterSeverity.bind(this);
        this.filter = this.filter.bind(this);

        this.state = {
            patients: [],
            filterName: '',
            filterEmail: '',
            filterSeverity: '',
        }
    }
    componentDidMount() {
        this.getPatients();
    }
    filterName(e) { this.setState({ filterName: e.target.value }) }
    filterEmail(e) { this.setState({ filterEmail: e.target.value }) }
    filterSeverity(e) { this.setState({ filterSeverity: e.target.value }) }
    filter() {
        let filter = `"name":"${this.state.filterName}","email":"${this.state.filterEmail}","severity":"${this.state.filterSeverity}"`;
        Axios.get(patientUrl + filter).then(res => {
            this.setState({ patients: res.data });
        }).catch((err) => {
            console.log(err);
        });
    }
    getPatients() {
        Axios.get(patientUrl).then(res => {
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
                            <tr>
                                <th scope="col"><input type="text"
                                    className="form-control"
                                    value={this.state.filterName}
                                    onChange={this.filterName}
                                /></th>
                                <th scope="col"><input type="text"
                                    className="form-control"
                                    value={this.state.filterEmail}
                                    onChange={this.filterEmail}
                                /></th>
                                <th scope="col"></th>
                                <th scope="col"><input type="text"
                                    className="form-control"
                                    value={this.state.filterSeverity}
                                    onChange={this.filterSeverity}
                                /></th>
                                <th><button className="form-control"
                                    onClick={this.filter}>
                                    Filter
                                </button></th>
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