import { request ,GraphQLClient } from "graphql-request";
import { useMutation, gql } from '@apollo/client';


const graphqlAPI = process.env.REACT_APP_NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const fs = require('fs')


// export const mut= gql`
// mutation CreateComment($name: String!, $email: String!, $company: String!, $speciality: String!,$message: String!,$country: String!) {
//   createComment(data: {name: $name, company: $company, email: $email, country:$country, speciality: $speciality, message: $message}) { id }
// }
// `


export const getContacts = async () => {
  const contacts = await request(graphqlAPI,`
  query MyQuery {
    contacts {
      country
      company
      createdAt
      email
      id
      message
      name
      speciality
    }
  }
  `);
  return contacts;
  };

 

  // export const submitContact = async ({name,company,email,country,message,speciality}) =>{

  //   const query = gql`
  //   mutation CreateComment($name: String!, $email: String!, $company: String!, $speciality: String!,$message: String!,$country: String!) {
  //     createComment(data: {name: $name, company: $company, email: $email, country:$country, speciality: $speciality, message: $message}) { id }
  //   }
  // ` ;
  
  //  const [createContact] = useMutation(query, {
  //   variables:{
  //     name:name,
  //     company:company,
  //     email:email,
  //     country:country,
  //     speciality:speciality,
  //     message:message,
  
  //   }})

  //   createContact()
    
    
  //   }
  

  // const sendFile=(cv)=>{
  //   const form = new FormData();
  //   form.append('fileUpload',fs.createReadStream(cv));
  //     fetch(`${process.env.HYGRAPH_URL}/upload`, {
  //           method: 'POST',
  //           headers: {
  //             Authorization: `Bearer ${process.env.HYGRAPH_ASSET_TOKEN}`,
  //           },
  //           body: form,
  //         });
  // }

  

