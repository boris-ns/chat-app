import React from 'react';
import PeopleList from './people-list/people-list';
import MessageList from './message-list/message-list';
import { newUserArrived, newMessageArrived, sendMessage } from '../../utils/config/socket';
import { MSG_FROM_FRIEND, MSG_FROM_SYSTEM, MSG_FROM_ME } from '../../utils/consts/message-types';
import './chat.css';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            onlinePeople: [],
            messages: []
        };

        newUserArrived((err, username) => {
            const newMessage = {
                message: `User '${username}' has now joined the chat. Say hi!`,
                type: MSG_FROM_SYSTEM
            };

            this.setState(prevState => { 
                return {
                    messages: [...prevState.messages, newMessage],
                    onlinePeople: [...prevState.onlinePeople, username]
                };
            });
        });

        newMessageArrived((err, usernameFrom, message) => {
            console.log("STigla poruka od ", usernameFrom);
            const newMessage = {
                message: message,
                type: MSG_FROM_FRIEND,
                usernameFrom: usernameFrom
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
        const username = localStorage.getItem('username');
        sendMessage(username, this.state.message);

        const newMessage = {
            message: this.state.message,
            type: MSG_FROM_ME
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