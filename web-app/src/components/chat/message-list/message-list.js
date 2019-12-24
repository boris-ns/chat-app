import React from 'react';
import './message-list.css';

const MessageList = (props) => {
    const { messages } = props;

    return messages.map((message, index) => {
        let messageClass = '';

        switch (message.type) {
            case 'ME': messageClass = 'me'; break;
            case 'FRIEND': messageClass = 'friend'; break;
            case 'SYSTEM': messageClass = 'system'; break;
        }

        return (
            <div key={index} className={messageClass}>
                {message.message}
            </div>
        );
    });
}

export default MessageList;
