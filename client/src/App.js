import React, { Component } from 'react';
import { ApolloClient, ApolloProvider } from 'react-apollo';

import ChannelsList from './ChannelsList'
import mockNetworkInterface from './mockInterface';

import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  networkInterface: mockNetworkInterface
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <ChannelsList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
