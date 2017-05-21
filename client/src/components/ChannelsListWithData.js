import React from 'react';
import { gql, graphql } from 'react-apollo';

import AddChannel from './AddChannel'

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

const ChannelsList = ({ data: { loading, error, channels }}) => {
  if (loading) { return (<p>Loading...</p>) };
  if (error) { return (<p>{error.message}</p>) };

  return (
    <div className="channelsList">
      <AddChannel />
      <ul>
        {channels.map(ch => <li key={ch.id}>{ch.name}</li>)}
      </ul>
    </div>
  )
};

export default graphql(channelsListQuery)(ChannelsList);
