import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './Message.css';

const Message = ({message:{user,text},name}) =>{
   let isSendbyCurrentuser=false;

 const trimName=name.trim().toLowerCase();
  if(user === trimName){
  	isSendbyCurrentuser=true;
  }
 return (
 isSendbyCurrentuser
  ? (	
<div className= "messageContainer justifyEnd">
<p className = "sentText">{trimName}</p>
<div className="messageBox backgroundBlue">
<p className="messageText colourWhite">{text}</p>
</div>
</div> 
)
:  (
<div className="messageContainer justifyStart">
<p className = "sentText pl-10">{user}</p>
<div className="messageBox backgroundblack">
<p className="messageText">{text}</p>
</div>
</div> 
)
 	);
	}
export default Message;