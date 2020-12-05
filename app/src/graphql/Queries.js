import gql from "graphql-tag"

//USER QUERIES
export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      firstName
      lastName
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
      token
    }
  }
`

//PACT MUTATIONS
