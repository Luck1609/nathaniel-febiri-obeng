import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache, } from '@apollo/client';
import './index.scss';
import Entry from 'Pages/Entry';
import { Provider } from 'react-redux';
import Store from 'Redux/Store';
import { GlobalStyles } from 'Components/styles/index.styles';


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Provider store={Store}>
      <GlobalStyles />
      <Entry />
    </Provider>
  </ApolloProvider>
);
