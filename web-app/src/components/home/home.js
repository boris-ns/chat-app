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
            localStorage.setItem('username', username);
            this.props.gotoChatPage();
        });
    }

    onEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onClickEnter();
        }
    }

    render() {
        return (
            <div className="home-container">
                <h1 className="title">Welcome to chat-app</h1>

                <input type="text" 
                    className="input-field" 
                    placeholder="Username" 
                    onChange={this.onChangeUsername} 
                    onKeyPress={this.onEnterKeyPress}
                />

                <input type="text" 
                    className="input-field" 
                    placeholder="Chat room name" 
                    onChange={this.onChangeChatRoomName} 
                    disabled={true} // TODO: Remove when you implement chat rooms
                />

                <input type="password" 
                    className="input-field" 
                    placeholder="Chat room password (if exists)" 
                    onChange={this.onChangeChatRoomPassword} 
                    disabled={true} // TODO: Remove when you implement chat rooms
                />

                <button className="enterButton" 
                    onClick={this.onClickEnter}
                    disabled={this.state.username === ''}    
                >
                        Enter
                </button>
            </div>
        );
    }
}

