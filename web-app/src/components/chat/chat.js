import React from 'react';
import PeopleList from './people-list/people-list';
import MessageList from './message-list/message-list';
import './chat.css';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onlinePeople: ['pera', 'zika', 'mika', 'fika'],
            messages: [
                {
                    message: 'This is stranger message',
                    type: 'FRIEND'
                },
                {
                    message: 'This is message from me',
                    type: 'ME'
                },
                {
                    message: 'This is system message',
                    type: 'SYSTEM'
                }
            ],
        };
    }

    render() {
        return (
            <div className="container">
                <div className="people-online-window">
                    <p>People online:</p>
                    <PeopleList onlinePeople={this.state.onlinePeople} />
                </div>

                <div className="chat-window">
                    <div className="chat">
                        <MessageList messages={this.state.messages} />
                    </div>

                    <div className="message-field">
                        <input type="text" />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        );
    }
}