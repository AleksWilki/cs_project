import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {   // Renders all html code
        return (            // All code below are links to other pages and all use the same link styling. 
            <div style={headerStyle}>
                <h1>Staff Patient Detail Viewer</h1>
                <Link to="/home" style={linkStyle}> Home</Link> | 

            </div>
        )
    }
}
const headerStyle = {   // styling for links
    background: '#6B86FF',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
    }
    const linkStyle={
    color: '#f0f0f0',
    textDecoration:'none'
    }
    export default Header;