import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Join(){
    
    const[name, setName] = useState('');
    const[room, setRoom] = useState('');

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer" style={{textAlign: "center"}}>
                <h1 className="heading">Medical Staff Chat System</h1>
                <div style={{paddingLeft: "40%"}}><input placeholder="username" type="text" className="form-control" style={{width: "250px"}} onChange={(e) => setName(e.target.value)}/></div>
                <br></br>
                <div style={{paddingLeft: "40%"}}><input placeholder="room" type="text" className="form-control" style={{width: "250px"}} onChange={(e) => setRoom(e.target.value)}/></div>

                <br></br>

                <Link onClick={e => (!name || !room) ? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button" className="btn btn-success" type="submit">Join</button>
                </Link>
            </div>
        </div>
    )
}