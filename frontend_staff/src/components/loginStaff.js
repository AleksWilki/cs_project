import React, { Component } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

const Axios = axios.create({
    withCredentials: true
});

export class loginStaff extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            email: '',
            password: '',
        }
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
        console.log("here")
        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        Axios.post('http://localhost:3000/Staff/login', user).then(res => {
            console.log("res1", res)
            this.props.updateUser();
            this.props.history.push('/home');
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
            <div className="container">
                <div style={pdaStyle}>
                    <div className="row">
                        <div className="col-md-5"><label style={labelStyle}>Enter Username:</label></div>
                        <div className="col-md-4">
                            <input type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><label style={labelStyle}>Enter Password:</label></div>
                        <div className="col-md-4">
                            <input type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                    </div>
                    <div className="row" >
                        <button type="button" className="btn btn-success" style={buttonStyle} onClick={this.login}>Staff Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

const pdaStyle = {   // Css styling for the form
    margin: "0 auto",
    textAlign: 'center',
    height: "450px",
    width: "800px",
    border: "10px solid black",
    padding: "30px",
    paddingTop: "150px"
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

export default loginStaff
