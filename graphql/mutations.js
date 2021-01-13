/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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

export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPact = /* GraphQL */ `
  mutation CreatePact(
    $input: CreatePactInput!
    $condition: ModelPactConditionInput
  ) {
    createPact(input: $input, condition: $condition) {
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
export const updatePact = /* GraphQL */ `
  mutation UpdatePact(
    $input: UpdatePactInput!
    $condition: ModelPactConditionInput
  ) {
    updatePact(input: $input, condition: $condition) {
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
export const deletePact = /* GraphQL */ `
  mutation DeletePact(
    $input: DeletePactInput!
    $condition: ModelPactConditionInput
  ) {
    deletePact(input: $input, condition: $condition) {
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
