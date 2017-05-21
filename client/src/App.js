import React, { Component } from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import ChannelsListWithData from './components/ChannelsListWithData'

import './App.css';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 500);
  }
}])

const client = new ApolloClient({
  networkInterface
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">React + GraphQL Tutorial</div>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
