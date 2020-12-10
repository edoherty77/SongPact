import gql from 'graphql-tag'

//USER QUERIES
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      email
      joinDate
      artistName
    }
  }
`

//PACT QUERIES

//USER MUTATIONS

export const SIGNIN_USER = gql`
  mutation($email: String!, $password: String!) {
    signinUser(email: $email, password: $password) {
      token
    }
  }
`

export const SIGNUP_USER = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $artistName: String!
  ) {
    signupUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      artistName: $artistName
    ) {
      lastName
      firstName
      artistName
      email
    }
  }
`

//PACT MUTATIONS
