import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

export class home extends Component {
    render() {
        return (
            <div className="container">
                <div style={appStyle}>
                    <div className="row">
                        <div className="col-md-4" style={icon}>
                            <Link style={linkStyle} to="/blood-preasure"> <i style={inIcon} className="fa fa-heart"></i></Link>
                        </div>
                        <div className="col-md-4" style={icon}>
                            <Link style={linkStyle} to="/sleep"> <i style={inIcon} className="fa fa-bed"></i></Link>
                        </div>
                        <div className="col-md-4" style={icon} >
                            <Link style={linkStyle} to="/food-intake"><i style={inIcon} className="fa fa-spoon"></i></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={icon}>
                            <Link style={linkStyle} to="/step-counter"><i style={inIcon} className="fa fa-blind"></i></Link>
                        </div>
                        <div className="col-md-4" style={icon}>
                            <Link style={linkStyle} to="/heart-rate"><i style={inIcon} className="fa fa-heartbeat"></i></Link>
                        </div>
                        <div className="col-md-4" style={icon}>
                            <Link style={linkStyle} to="/drink-intake"><i style={inIcon} className="fa fa-beer"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const appStyle = {   // Css styling for the form
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
const inIcon = {
    'fontSize': "10em"
}

const linkStyle = {
    color: '#000',
    textDecoration: 'none'
}

export default home
