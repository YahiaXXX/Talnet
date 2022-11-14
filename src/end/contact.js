import {gql,GraphQLClient} from "graphql-request"

const graphqlAPI = process.env.REACT_APP_NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default async function contact(req,res){
  const graphQLClient= new GraphQLClient(graphqlAPI,{
    headers :{
      authorization : `Bearer ${process.env.REACT_APP_GRAPHCMS_TOKEN}`
    }
  })
  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $company: String!, $country: String!,$speciality: String!,$message: String!) {
      createComment(data: {name: $name, email: $email, country: $country,speciality:$speciality,company:$company,message:$message }) { id }
    }
  `;
  try{
    const result = await graphQLClient.request(query,{
      name:req.body.name,
      email:req.body.email,
      company:req.body.company,
      message:req.body.message,
      speciality:req.body.speciality,
      country:req.body.country

  
    })
    return res.status(200).send(result)

  }
  catch(err){
    console.log(err)

  }

  
}