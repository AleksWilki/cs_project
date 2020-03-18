import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

export class bloodPreasure extends Component {
    constructor(props) {
        super(props);

        this.sendBloodPressure = this.sendBloodPressure.bind(this);
    }
    sendBloodPressure() {
        console.log("boop");
        let updates = {
            bloodPressure: [90 + Math.floor(Math.random() * 30), 60 + Math.floor(Math.random() * 20)]
        }
        Axios.put(`http://localhost:3000/Patient/patient/5e6c9247bee9cc271cbf3e22`, updates);
    }
    render() {
        return (
            <div className="container">
                <div style={watchStyle}>
                    <i className="fa fa-heartbeat fa-5x"></i>
                    <br></br>
                    <label style={{ fontSize: "25px" }}>Latest Blood Preasure:</label>
                    <h3 style={{ fontSize: "50px" }}>{this.props.bloodPressure.toString()}</h3>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Link style={linkStyle} to="/heart-rate"><div style={{ fontSize: "20px", float: "right" }}> <i className="fa fa-arrow-left fa-3x"></i> Scroll Left on Watch</div></Link>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Link style={linkStyle} to="/step-counter"><div style={{ fontSize: "20px", float: "left" }}> Scroll Right on Watch<i className="fa fa-arrow-right fa-3x"></i></div></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <button className="sendButton" onClick={this.sendBloodPressure}>Take Blood Pressure</button>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}

const watchStyle = {   // Css styling for the form
    margin: "0 auto",
    textAlign: 'center',
    height: "450px",
    width: "250px",
    border: "10px solid black",
    padding: "30px",
    paddingTop: "30px"
}

const linkStyle = {
    color: '#000',
    textDecoration: 'none'
}

export default bloodPreasure
