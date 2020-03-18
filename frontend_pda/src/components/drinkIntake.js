import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Axios from 'axios';

export class drinkIntake extends Component {
    render() {
        return (
            <div className="container">
                <div style={pdaStyle}>
                    <div className="row">
                        <div className="col-md-4"><i className="fa fa-beer fa-5x"></i></div>
                        <div className="col-md-4">
                            <select className="form-control">
                                <option selected disabled value="-1">-Select a drink to add-</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-success" style={buttonStyle}><i className="fa fa-check fa-3x"></i> </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Link style={linkStyle} to="/home"><div style={{ fontSize: "20px" }}> <i className="fa fa-arrow-left fa-3x"></i> PDA Back Button</div></Link>
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
const linkStyle = {
    color: '#000',
    textDecoration: 'none'
}
const buttonStyle = {
    height: "150px",
    width: "150px"
}

export default drinkIntake
