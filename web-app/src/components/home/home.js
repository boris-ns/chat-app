import React from 'react';
import { connectToChat } from '../../utils/config/socket';
import './home.css';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            chatRoomName: '',
            chatRoomPassword: '',
        };
    }

    onChangeUsername = event => {
        this.setState({ username: event.target.value });
    }

    onChangeChatRoomName = event => {
        this.setState({ chatRoomName: event.target.value });
    }

    onChangeChatRoomPassword = event => {
        this.setState({ chatRoomPassword: event.target.value });
    }

    onClickEnter = () => {
        const { username, chatRoomName, chatRoomPassword } = this.state;

        connectToChat(username, chatRoomName, chatRoomPassword, (err, message) => {
            console.log(message);
            this.props.gotoChatPage();
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Welcome to chat-app</h1>

                <input type="text" 
                    className="input-field" 
                    placeholder="Username" 
                    onChange={this.onChangeUsername} 
                />

                <input type="text" 
                    className="input-field" 
                    placeholder="Chat room name" 
                    onChange={this.onChangeChatRoomName} 
                />

                <input type="password" 
                    className="input-field" 
                    placeholder="Chat room password (if exists)" 
                    onChange={this.onChangeChatRoomPassword} 
                />

                <button className="enterButton" onClick={this.onClickEnter}>Enter</button>
            </div>
        );
    }
}

