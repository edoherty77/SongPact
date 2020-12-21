import gql from 'graphql-tag'

//USER QUERIES
export const getUser = gql`
  query {
    getUser(email: $email) {
      id
      firstName
    }
  }
`

export const listUsers = gql`
  query {
    listUsers {
      items {
        artistName
        companyName
        firstName
        lastName
        email
      }
    }
  }
`

//PACT QUERIES

export const listPacts = gql`
  query {
    listPacts {
      items {
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
    $id: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $companyName: String!
    $artistName: String!
  ) {
    createUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      companyName: $companyName
      artistName: $artistName
    ) {
      id
      lastName
      firstName
      artistName
      companyName
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
