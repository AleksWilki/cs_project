import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

export class bloodPreasure extends Component {
    render() {
        return (
            <div className="container">
                <div style={pdaStyle}>
                    <div className="row">
                        <div className="col-md-4"><i className="fa fa-heartbeat fa-5x"></i></div>
                        <div className="col-md-4">
                            <label style={{ fontSize: "20px" }}>Latest Blood Preasure:</label><br></br>
                            <h3 style={{ fontSize: "30px" }}>{this.props.bloodPressure ? this.props.bloodPressure[0] + ", " + this.props.bloodPressure[1] : 0}</h3>
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

export default bloodPreasure
