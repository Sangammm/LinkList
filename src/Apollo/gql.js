import gql from "graphql-tag";

export const SIGNUP = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
        email
        password
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        password
      }
    }
  }
`;

export const FEED = gql`
  query feed(){
    
  }
`;

export const ISLOGGEDIN = gql`
  {
    isLoggedIn @client
  }
`;
