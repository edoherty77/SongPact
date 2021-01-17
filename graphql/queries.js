/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      artistName
      companyName
      address
      city
      state
      zipCode
      email
      contacts {
        id
        firstName
        lastName
        artistName
        companyName
        address
        city
        state
        zipCode
        email
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        firstName
        lastName
        artistName
        companyName
        address
        city
        state
        zipCode
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        artistName
        companyName
        address
        city
        state
        zipCode
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
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
      _version
      _deleted
      _lastChangedAt
      createdAt
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
        role
        initBy
        contributors
        perfPublish
        prodAdvance
        prodPublish
        prodRoyalty
        prodCredit
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const syncPacts = /* GraphQL */ `
  query SyncPacts(
    $filter: ModelPactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
