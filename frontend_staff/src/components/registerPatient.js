import React, { Component } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

const Axios = axios.create({
    withCredentials: true
});

export class registerPatient extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeSymptoms = this.onChangeSymptoms.bind(this);
        this.onChangeBirthdate = this.onChangeBirthdate.bind(this);
        this.register = this.register.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            symptoms: '',
            birthdate: {},
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
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
    onChangeSymptoms(e) {
        this.setState({
            symptoms: e.target.value
        })
    }
    onChangeBirthdate(e) {
        this.setState({
            birthdate: e.target.value
        })
    }
    register() {
        console.log("here")
        const user = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            birthDate: this.state.birthdate,
            symptoms: this.state.symptoms,
        }

        Axios.post('http://localhost:3000/Patient/register', user).then(res => {
            console.log("res1", res)
            this.props.updateUser();
            this.props.history.push('/home');
        }).catch(err => {
            console.log("err", err);
        })

        this.setState({
            name: '',
            email: '',
            password: '',
            symptoms: '',
            birthdate: {},
        })
    }
    render() {
        return (
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-md-5"><label style={labelStyle}>Name:</label></div>
                        <div className="col-md-4">
                            <input type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><label style={labelStyle}>Email:</label></div>
                        <div className="col-md-4">
                            <input type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><label style={labelStyle}>Password:</label></div>
                        <div className="col-md-4">
                            <input type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><label style={labelStyle}>Symptoms:</label></div>
                        <div className="col-md-4">
                            <input type="text"
                                className="form-control"
                                value={this.state.symptoms}
                                onChange={this.onChangeSymptoms}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><label style={labelStyle}>Birthdate:</label></div>
                        <div className="col-md-4">
                            <input type="date"
                                className="form-control"
                                value={this.state.birthdate}
                                onChange={this.onChangeBirthdate}
                            />
                        </div>
                    </div>
                    <div className="row" >
                        <button type="button" className="btn btn-success" style={buttonStyle} onClick={this.register}>Register Patient</button>
                    </div>
                </div>
            </div>
        )
    }
}

const buttonStyle = {
    height: "150px",
    width: "150px",
    fontSize: "30px",
    margin: "auto"
}

const labelStyle = {
    fontSize: "30px",
    float: "right"
}

export default registerPatient
