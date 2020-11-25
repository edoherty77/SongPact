import gql from 'graphql-tag'

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
