import React from 'react';

import './input.css';

const input = ({message,setMessage,sendMessage}) =>(
	<form className="form">
       <input className="input" placeholder="Are you ready to type" value={message} onChange={(event) => setMessage(event.target.value)} onKeyPress={event => event.key ==='Enter'? sendMessage(event) :null}/>
       <button className="sendButton" onClick={(event)=>sendMessage(event)}>send</button>
	</form>
	)
export default input;