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
      friends {
        items {
          id
          receiverId
          createdAt
          updatedAt
        }
        nextToken
      }
      performed {
        items {
          id
          pactID
          userId
          artistName
          firstName
          lastName
          publisherPercent
          createdAt
          updatedAt
        }
        nextToken
      }
      produced {
        items {
          id
          pactID
          userId
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
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
        friends {
          items {
            id
            receiverId
            createdAt
            updatedAt
          }
          nextToken
        }
        performed {
          nextToken
        }
        produced {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const getFriend = /* GraphQL */ `
  query GetFriend($id: ID!) {
    getFriend(id: $id) {
      id
      receiverId
      user {
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
        friends {
          nextToken
        }
        performed {
          nextToken
        }
        produced {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        receiverId
        user {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const getPact = /* GraphQL */ `
  query GetPact($id: ID!) {
    getPact(id: $id) {
      id
      type
      recordTitle
      initBy
      sample
      recordLabel
      labelName
      collaborators
      performers {
        items {
          id
          pactID
          userId
          artistName
          firstName
          lastName
          publisherPercent
          createdAt
          updatedAt
        }
        nextToken
      }
      producer {
        id
        user {
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
          createdAt
          updatedAt
        }
        pactID
        userId
        advancePercent
        publisherPercent
        royaltyPercent
        credit
        pact {
          id
          type
          recordTitle
          initBy
          sample
          recordLabel
          labelName
          collaborators
          createdAt
          status
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      status
      updatedAt
    }
  }
`
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
        initBy
        sample
        recordLabel
        labelName
        collaborators
        performers {
          nextToken
        }
        producer {
          id
          pactID
          userId
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          createdAt
          updatedAt
        }
        createdAt
        status
        updatedAt
      }
      nextToken
    }
  }
`
export const getPerformer = /* GraphQL */ `
  query GetPerformer($id: ID!) {
    getPerformer(id: $id) {
      id
      user {
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
        friends {
          nextToken
        }
        performed {
          nextToken
        }
        produced {
          nextToken
        }
        createdAt
        updatedAt
      }
      pactID
      userId
      artistName
      firstName
      lastName
      publisherPercent
      pact {
        id
        type
        recordTitle
        initBy
        sample
        recordLabel
        labelName
        collaborators
        performers {
          nextToken
        }
        producer {
          id
          pactID
          userId
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          createdAt
          updatedAt
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
export const listPerformers = /* GraphQL */ `
  query ListPerformers(
    $filter: ModelPerformerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPerformers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
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
          createdAt
          updatedAt
        }
        pactID
        userId
        artistName
        firstName
        lastName
        publisherPercent
        pact {
          id
          type
          recordTitle
          initBy
          sample
          recordLabel
          labelName
          collaborators
          createdAt
          status
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const getProducer = /* GraphQL */ `
  query GetProducer($id: ID!) {
    getProducer(id: $id) {
      id
      user {
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
        friends {
          nextToken
        }
        performed {
          nextToken
        }
        produced {
          nextToken
        }
        createdAt
        updatedAt
      }
      pactID
      userId
      advancePercent
      publisherPercent
      royaltyPercent
      credit
      pact {
        id
        type
        recordTitle
        initBy
        sample
        recordLabel
        labelName
        collaborators
        performers {
          nextToken
        }
        producer {
          id
          pactID
          userId
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          createdAt
          updatedAt
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`
export const listProducers = /* GraphQL */ `
  query ListProducers(
    $filter: ModelProducerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
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
          createdAt
          updatedAt
        }
        pactID
        userId
        advancePercent
        publisherPercent
        royaltyPercent
        credit
        pact {
          id
          type
          recordTitle
          initBy
          sample
          recordLabel
          labelName
          collaborators
          createdAt
          status
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
