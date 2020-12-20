/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      _id
      firstName
      lastName
      email
      artistName
      contacts {
        id
        _id
        firstName
        lastName
        email
        artistName
        createdAt
        updatedAt
      }
      pacts {
        id
        type
        recordTitle
        role
        initBy
        contributors
        perfPublish
        prodAdvance
        prodPublish
        prodRoyalty
        prodCredit
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _id
        firstName
        lastName
        email
        artistName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPact = /* GraphQL */ `
  query GetPact($id: ID!) {
    getPact(id: $id) {
      id
      type
      recordTitle
      role
      initBy
      contributors
      perfPublish
      prodAdvance
      prodPublish
      prodRoyalty
      prodCredit
      status
      createdAt
      updatedAt
    }
  }
`;
export const listPacts = /* GraphQL */ `
  query ListPacts(
    $filter: ModelPactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        recordTitle
        role
        initBy
        contributors
        perfPublish
        prodAdvance
        prodPublish
        prodRoyalty
        prodCredit
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
