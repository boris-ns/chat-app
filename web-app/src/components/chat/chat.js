import React from 'react';
import PeopleList from './people-list/people-list';
import MessageList from './message-list/message-list';
import { newUserArrived, newMessageArrived, sendMessage } from '../../utils/config/socket';
import './chat.css';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);

        // NOTE: This is data only for testing
        this.state = {
            message: '',
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

        newUserArrived((err, username) => {
            const newMessage = {
                message: `User '${username}' has now joined the chat. Say hi`,
                type: 'SYSTEM'
            };

            this.setState(prevState => { 
                return {
                    messages: [...prevState.messages, newMessage],
                    onlinePeople: [...prevState.onlinePeople, username]
                };
            });
        });

        newMessageArrived((err, usernameFrom, message) => {
            const newMessage = {
                message: message,
                type: 'FRIEND'
            };

            this.setState(prevState => {
                return {
                    messages: [...prevState.messages, newMessage]
                };
            });
        });
    }

    onChangeMessage = (event) => {
        this.setState({ message: event.target.value });
    }

    onClickSend = () => {
        // TODO: Implement later, who is sending this message
        sendMessage('PERO', this.state.message);

        const newMessage = {
            message: this.state.message,
            type: 'ME'
        };

        this.setState(prevState => {
            return {
                messages: [...prevState.messages, newMessage],
                message: ''
            };
        });

    }

    render() {
        return (
            <div className="chat-container">
                <div className="people-online-window">
                    <p>People online:</p>
                    <PeopleList onlinePeople={this.state.onlinePeople} />
                </div>

                <div className="chat-window">
                    <div className="chat">
                        <MessageList messages={this.state.messages} />
                    </div>

                    <div className="message-field">
                        <input type="text" 
                            value={this.state.message}
                            placeholder="Enter a message"
                            onChange={this.onChangeMessage}    
                        />

                        <button onClick={this.onClickSend}>Send</button>
                    </div>
                </div>
            </div>
        );
    }
}