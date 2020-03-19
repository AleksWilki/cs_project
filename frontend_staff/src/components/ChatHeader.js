import React from 'react';

import onlineIcon from './icons/online.png';
import closeIcon from './icons/close.png';

const ChatHeader = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
  </div>
);

export default ChatHeader;