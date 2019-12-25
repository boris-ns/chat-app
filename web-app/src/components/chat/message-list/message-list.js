import React from 'react';
import './message-list.css';

const MessageList = (props) => {
    const { messages } = props;

    const messageItems = messages.map((message, index) => {
        let messageClass = '';

        switch (message.type) {
            case 'ME': messageClass = 'me'; break;
            case 'FRIEND': messageClass = 'friend'; break;
            case 'SYSTEM': messageClass = 'system'; break;
            default: messageClass = 'system';
        }

        return (
            <li key={index} className={messageClass}>
                {
                    message.usernameFrom ? 
                        <div className="usernameFrom">{message.usernameFrom}</div> : <div></div>
                }
                <span>{message.message}</span>
            </li>
        );
    });

    return (
        <ul className="message-list">
            {messageItems}
        </ul>
    );
}

export default MessageList;
