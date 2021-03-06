import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

export class stepCounter extends Component {
    render() {
        return (
            <div className="container">
                <div style={appStyle}>
                    <div className="row">
                        <div className="col-md-4"><i className="fa fa-blind fa-5x"></i></div>
                        <div className="col-md-4">
                            <label style={{ fontSize: "25px" }}>Steps Taken Today:</label><br></br>
                            <h3 style={{ fontSize: "80px" }}>{this.props.steps}</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Link style={linkStyle} to="/home"><div style={{ fontSize: "20px" }}> <i className="fa fa-arrow-left fa-3x"></i>App Back Button</div></Link>
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
    paddingTop: "150px"
}
const linkStyle = {
    color: '#000',
    textDecoration: 'none'
}

export default stepCounter
