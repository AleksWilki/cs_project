import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Axios from 'axios';

export class login extends Component {
    render() {
        return (
            <div className="container">
                <div style={pdaStyle}>
                    <div className="row">
                        <div className="col-md-5"><label style={labelStyle}>Enter Username:</label></div>
                        <div className="col-md-4">
                            <input className="form-control" type="text"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5"><label style={labelStyle}>Enter Password:</label></div>
                        <div className="col-md-4">
                            <input className="form-control" type="password"></input>
                        </div>
                    </div>
                    <div className="row" >
                        <button type="button" class="btn btn-success" style={buttonStyle}>Login</button>
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

export default login
