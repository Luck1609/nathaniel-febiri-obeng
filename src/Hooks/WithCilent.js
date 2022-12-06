import { Component } from 'react';
import { ApolloConsumer } from '@apollo/client';
// import Layout from 'Components/Layout';

class WithApolloClient extends Component {

  render() { 
    const Content = this.props.content;

    // console.log('Apollo contnent', this.props)

    return (
      <ApolloConsumer>
        {
          (client) => <Content client={client} />
        }
        {/* {
          (client) => <Layout client={client} />
        } */}
      </ApolloConsumer>
    );
  }
}
 
export default WithApolloClient;