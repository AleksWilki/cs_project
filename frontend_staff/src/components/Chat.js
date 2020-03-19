import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";
import Input from "./Input";
import './Main.css';
import MessagesList from "./MessagesList";
import ChatHeader from "./ChatHeader";

let socket;


export default function ChatRoom({location}){

    const[name, setName] = useState('');
    const[room, setRoom] = useState('');
    const[messages, setMessages] = useState([]);
    const[message,setMessage] = useState('');
    const[users, setUsers] = useState('');
    const ENDPOINT = 'localhost:3000';

    useEffect(() => {
        const{name,room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join',{name,room}, () => {

        });

        return() =>{
            socket.emit('disconnet');
            socket.off();
        }
    },[ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message',(message) => {
            setMessages([...messages, message]);
        });
    })

    const sendMessage = (e) => {
        e.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return(
        <div className="outerContainer">
            <div className="containerChat">
                <ChatHeader room={room} />
                <MessagesList messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )

}