import { Component } from 'react';
import { ApolloConsumer } from '@apollo/client';
import Layout from 'Components/Layout';

// export default function WithApolloClient() {
//   return (
//     <ApolloConsumer>
//       {(client) => <>
//       We have access to the client!
//         {console.log('Client!', client) /* do stuff here */}
//       </>}
//     </ApolloConsumer>
//   );
// }

class WithApolloClient extends Component {

  render() { 
    // const Children = this.props.component;


    // console.log('Apollo clinet child', Children)
    return (
      <ApolloConsumer>
        {/* {(client) => <>{ this.props.children }</>} */}
        {/* {(client) => <Children client={client} />} */}
        {
          (client) => <Layout client={client} />
        }
      </ApolloConsumer>
    );
  }
}
 
export default WithApolloClient;