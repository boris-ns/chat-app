import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Home from './components/home/home';
import Chat from './components/chat/chat';
import history from './utils/config/history';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  gotoChatPage = () => {
    history.push('/chat');
  };

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/">
              <Home gotoChatPage={this.gotoChatPage} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
