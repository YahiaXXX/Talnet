import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, ApolloLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';


const uploadLink=createUploadLink({
   uri: process.env.REACT_APP_NEXT_PUBLIC_GRAPHCMS_ENDPOINT_ASSET,
})


const client = new ApolloClient({
   link:uploadLink , 
   cache: new InMemoryCache(),
   
   
 });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router>
      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    

   </Router>
    
  
);

