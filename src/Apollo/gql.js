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

export const VOTE = gql`
  mutation vote($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      user {
        name
        id
      }
    }
  }
`;

export const FEED = gql`
  {
    feed {
      id
      description
      url
      votes {
        id
        user {
          id
          name
        }
      }
      postedBy {
        id
        name
      }
    }
  }
`;

export const ISLOGGEDIN = gql`
  {
    isLoggedIn @client
  }
`;
export const GETLOCALID = gql`
  {
    id @client
  }
`;
