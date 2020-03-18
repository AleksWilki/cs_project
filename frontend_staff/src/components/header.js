import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {   // Renders all html code
        if (this.props.loggedIn) {
            return (
                <div style={headerStyle}>
                    <h1>Staff Patient Detail Viewer</h1>
                    <Link to="/home" style={linkStyle}> Home</Link> |
                    <Link to="/register-patient" style={linkStyle}> register patient</Link>
                </div>
            )
        } else {
            return (
                <div style={headerStyle}>
                    <h1>Staff Patient Detail Viewer</h1>
                    <Link to="/register-staff" style={linkStyle}> register staff </Link> |
                    <Link to="/login-staff" style={linkStyle}> staff login </Link>
                </div>
            )
        }

    }
}
const headerStyle = {   // styling for links
    background: '#6B86FF',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
    color: '#f0f0f0',
    textDecoration: 'none'
}
export default Header;
