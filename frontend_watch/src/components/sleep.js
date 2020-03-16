import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

export class sleep extends Component {
    render() {
        return (
            <div className="container">
                <div style={watchStyle}>
                    <i className="fa fa-bed fa-5x"></i>
                    <br></br>
                    <label style={{fontSize: "25px"}}>Last sleeping pattern:</label>
                    <h3 style={{fontSize: "40px"}}>11pm till</h3>
                    <h3 style={{fontSize: "40px"}}>8am</h3>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Link style={linkStyle} to="/step-counter"><div style={{fontSize: "20px", float: "right"}}> <i className="fa fa-arrow-left fa-3x"></i> Scroll Left on Watch</div></Link>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Link style={linkStyle} to="/heart-rate"><div style={{fontSize: "20px", float: "left"}}> Scroll Right on Watch<i className="fa fa-arrow-right fa-3x"></i></div></Link>
                    </div>
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

const linkStyle={
    color: '#000',
    textDecoration:'none'
    }

export default sleep