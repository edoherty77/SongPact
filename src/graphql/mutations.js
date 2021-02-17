/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPerformer = /* GraphQL */ `
  mutation CreatePerformer(
    $input: CreatePerformerInput!
    $condition: ModelPerformerConditionInput
  ) {
    createPerformer(input: $input, condition: $condition) {
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
export const updatePerformer = /* GraphQL */ `
  mutation UpdatePerformer(
    $input: UpdatePerformerInput!
    $condition: ModelPerformerConditionInput
  ) {
    updatePerformer(input: $input, condition: $condition) {
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
export const deletePerformer = /* GraphQL */ `
  mutation DeletePerformer(
    $input: DeletePerformerInput!
    $condition: ModelPerformerConditionInput
  ) {
    deletePerformer(input: $input, condition: $condition) {
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
export const createProducer = /* GraphQL */ `
  mutation CreateProducer(
    $input: CreateProducerInput!
    $condition: ModelProducerConditionInput
  ) {
    createProducer(input: $input, condition: $condition) {
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
export const updateProducer = /* GraphQL */ `
  mutation UpdateProducer(
    $input: UpdateProducerInput!
    $condition: ModelProducerConditionInput
  ) {
    updateProducer(input: $input, condition: $condition) {
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
export const deleteProducer = /* GraphQL */ `
  mutation DeleteProducer(
    $input: DeleteProducerInput!
    $condition: ModelProducerConditionInput
  ) {
    deleteProducer(input: $input, condition: $condition) {
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
