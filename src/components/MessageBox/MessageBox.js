import React from 'react';
import './MessageBox.css';

const MessageBox = (props) => {
  return (
    <div className={`message message-${props.variant || 'info'}`}>
      <p>{props.message}</p>
    </div>
  )
}

export default MessageBox;
