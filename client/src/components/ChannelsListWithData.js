import React from 'react';
import { gql, graphql } from 'react-apollo';

import AddChannel from './AddChannel'

export const channelsListQuery = gql`
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
      {channels.map(ch =>
        <div key={ch.id} className={'channel ' + (ch.id < 0 ? 'optimistic' : '')}>{ch.name}</div>
      )}
    </div>

  )
};

export default graphql(channelsListQuery, {
  options: { pollInterval: 5000 },
})(ChannelsList);
