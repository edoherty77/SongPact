import gql from 'graphql-tag'

//USER QUERIES
export const getUser = gql`
  query {
    getUser {
      user(_id: String!) : User
    }
  }
`

//PACT QUERIES

export const listPacts = gql`
  query {
    listPacts {
      items {
        id
        type
        role
        recordTitle
        initBy
        contributors
        perfPublish
        prodAdvance
        prodPublish
        prodRoyalty
        prodCredit
        status
      }
    }
  }
`

//USER MUTATIONS

export const createUser = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $artistName: String!
  ) {
    createUser(
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

export const createPact = gql`
  mutation(
    $type: String!
    $initBy: String
    $recordTitle: String!
    $contributors: [User]
    $role: String
  ) {
    createPact(
      input: {
        type: $type
        initBy: $initBy
        role: $role
        recordTitle: $recordTitle
        contributor: $contributor
      }
    ) {
      type
      recordTitle
      initBy
      contributor
      role
    }
  }
`
