/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognitoID
      firstName
      lastName
      artistName
      companyName
      address
      city
      state
      zipCode
      email
      contacts
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
        cognitoID
        firstName
        lastName
        artistName
        companyName
        address
        city
        state
        zipCode
        email
        contacts
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
      performers {
        items {
          id
          pactID
          userId
          userName
          publisherPercent
          createdAt
          updatedAt
        }
        nextToken
      }
      producer {
        id
        pactID
        userId
        userName
        advancePercent
        publisherPercent
        royaltyPercent
        credit
        pact {
          id
          type
          recordTitle
          role
          initBy
          status
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
        performers {
          nextToken
        }
        producer {
          id
          pactID
          userId
          userName
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPerformer = /* GraphQL */ `
  query GetPerformer($id: ID!) {
    getPerformer(id: $id) {
      id
      pactID
      userId
      userName
      publisherPercent
      pact {
        id
        type
        recordTitle
        role
        initBy
        performers {
          nextToken
        }
        producer {
          id
          pactID
          userId
          userName
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPerformers = /* GraphQL */ `
  query ListPerformers(
    $filter: ModelPerformerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPerformers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pactID
        userId
        userName
        publisherPercent
        pact {
          id
          type
          recordTitle
          role
          initBy
          status
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProducer = /* GraphQL */ `
  query GetProducer($id: ID!) {
    getProducer(id: $id) {
      id
      pactID
      userId
      userName
      advancePercent
      publisherPercent
      royaltyPercent
      credit
      pact {
        id
        type
        recordTitle
        role
        initBy
        performers {
          nextToken
        }
        producer {
          id
          pactID
          userId
          userName
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducers = /* GraphQL */ `
  query ListProducers(
    $filter: ModelProducerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pactID
        userId
        userName
        advancePercent
        publisherPercent
        royaltyPercent
        credit
        pact {
          id
          type
          recordTitle
          role
          initBy
          status
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
