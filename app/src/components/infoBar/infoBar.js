import React from 'react';
import './infoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
 const infoBar =({room})=>(
<div className="infoBar">
<div className="leftInnerContainer">
<img className="onlineIcon" src={onlineIcon} alt="onlineIcon" />
<h3>{room}</h3>
</div>
<div className="rightInnerContainer">
<a href="/"><img src={closeIcon} alt="closeIcon" /></a>
</div>
</div>
)
 export default infoBar;