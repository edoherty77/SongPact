import gql from 'graphql-tag'

//USER QUERIES
export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      username
      artistName
      email
      joinDate
    }
  }
`

//PACT QUERIES

//USER MUTATIONS

export const SIGNUP_USER = gql`
  mutation(
    $username: String!
    $email: String!
    $password: String!
    $artistName: String!
  ) {
    signupUser(
      username: $username
      email: $email
      password: $password
      artistName: $artistName
    ) {
      token
    }
  }
`

//PACT MUTATIONS
