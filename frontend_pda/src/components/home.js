import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css'; 
import Axios from 'axios';

export class home extends Component {
    render() {
        return (
            <div className="container">
                <div style={pdaStyle}>
                    <div className="row">
                        <div className="col-md-4" style={icon}>
                        <Link style={linkStyle} to="/blood-preasure"> <i className="fa fa-heartbeat fa-5x"></i></Link>
                        </div>
                        <div className="col-md-4" style={icon}>
                        <Link style={linkStyle} to="/sleep"> <i className="fa fa-bed fa-5x"></i></Link>
                        </div>
                        <div className="col-md-4" style={icon} >
                        <Link style={linkStyle} to="/food-intake"><i className="fa fa-spoon fa-5x"></i></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={icon}>
                        <Link style={linkStyle} to="/step-counter"><i className="fa fa-blind fa-5x"></i></Link>
                        </div>
                        <div className="col-md-4" style={icon}>
                        <Link style={linkStyle} to="/heart-rate"><i className="fa fa-heart fa-5x"></i></Link>
                        </div>
                        <div className="col-md-4" style={icon}>
                        <Link style={linkStyle} to="/drink-intake"><i className="fa fa-beer fa-5x"></i></Link>
                        </div>
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

    }
const icon = {
    padding: "10px"
}

const linkStyle={
    color: '#000',
    textDecoration:'none'
    }

export default home
