/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          artistName
          userId
          firstName
          lastName
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
          artistName
          firstName
          lastName
          createdAt
          updatedAt
        }
        nextToken
      }
      pacts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          artistName
          userId
          firstName
          lastName
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
          artistName
          firstName
          lastName
          createdAt
          updatedAt
        }
        nextToken
      }
      pacts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          artistName
          userId
          firstName
          lastName
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
          artistName
          firstName
          lastName
          createdAt
          updatedAt
        }
        nextToken
      }
      pacts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriend = /* GraphQL */ `
  subscription OnCreateFriend {
    onCreateFriend {
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
        pacts {
          nextToken
        }
        createdAt
        updatedAt
      }
      artistName
      userId
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFriend = /* GraphQL */ `
  subscription OnUpdateFriend {
    onUpdateFriend {
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
        pacts {
          nextToken
        }
        createdAt
        updatedAt
      }
      artistName
      userId
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFriend = /* GraphQL */ `
  subscription OnDeleteFriend {
    onDeleteFriend {
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
        pacts {
          nextToken
        }
        createdAt
        updatedAt
      }
      artistName
      userId
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePact = /* GraphQL */ `
  subscription OnCreatePact {
    onCreatePact {
      id
      type
      recordTitle
      initBy
      sample
      recordLabel
      labelName
      collaborators
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
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
        items {
          id
          pactID
          userId
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          artistName
          firstName
          lastName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      status
      updatedAt
    }
  }
`;
export const onUpdatePact = /* GraphQL */ `
  subscription OnUpdatePact {
    onUpdatePact {
      id
      type
      recordTitle
      initBy
      sample
      recordLabel
      labelName
      collaborators
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
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
        items {
          id
          pactID
          userId
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          artistName
          firstName
          lastName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      status
      updatedAt
    }
  }
`;
export const onDeletePact = /* GraphQL */ `
  subscription OnDeletePact {
    onDeletePact {
      id
      type
      recordTitle
      initBy
      sample
      recordLabel
      labelName
      collaborators
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
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
        items {
          id
          pactID
          userId
          advancePercent
          publisherPercent
          royaltyPercent
          credit
          artistName
          firstName
          lastName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      status
      updatedAt
    }
  }
`;
export const onCreatePerformer = /* GraphQL */ `
  subscription OnCreatePerformer {
    onCreatePerformer {
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
        pacts {
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
        users {
          nextToken
        }
        performers {
          nextToken
        }
        producer {
          nextToken
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePerformer = /* GraphQL */ `
  subscription OnUpdatePerformer {
    onUpdatePerformer {
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
        pacts {
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
        users {
          nextToken
        }
        performers {
          nextToken
        }
        producer {
          nextToken
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePerformer = /* GraphQL */ `
  subscription OnDeletePerformer {
    onDeletePerformer {
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
        pacts {
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
        users {
          nextToken
        }
        performers {
          nextToken
        }
        producer {
          nextToken
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProducer = /* GraphQL */ `
  subscription OnCreateProducer {
    onCreateProducer {
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
        pacts {
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
      artistName
      firstName
      lastName
      pact {
        id
        type
        recordTitle
        initBy
        sample
        recordLabel
        labelName
        collaborators
        users {
          nextToken
        }
        performers {
          nextToken
        }
        producer {
          nextToken
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProducer = /* GraphQL */ `
  subscription OnUpdateProducer {
    onUpdateProducer {
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
        pacts {
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
      artistName
      firstName
      lastName
      pact {
        id
        type
        recordTitle
        initBy
        sample
        recordLabel
        labelName
        collaborators
        users {
          nextToken
        }
        performers {
          nextToken
        }
        producer {
          nextToken
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProducer = /* GraphQL */ `
  subscription OnDeleteProducer {
    onDeleteProducer {
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
        pacts {
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
      artistName
      firstName
      lastName
      pact {
        id
        type
        recordTitle
        initBy
        sample
        recordLabel
        labelName
        collaborators
        users {
          nextToken
        }
        performers {
          nextToken
        }
        producer {
          nextToken
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserPact = /* GraphQL */ `
  subscription OnCreateUserPact {
    onCreateUserPact {
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
        pacts {
          nextToken
        }
        createdAt
        updatedAt
      }
      pact {
        id
        type
        recordTitle
        initBy
        sample
        recordLabel
        labelName
        collaborators
        users {
          nextToken
        }
        performers {
          nextToken
        }
        producer {
          nextToken
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserPact = /* GraphQL */ `
  subscription OnUpdateUserPact {
    onUpdateUserPact {
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
        pacts {
          nextToken
        }
        createdAt
        updatedAt
      }
      pact {
        id
        type
        recordTitle
        initBy
        sample
        recordLabel
        labelName
        collaborators
        users {
          nextToken
        }
        performers {
          nextToken
        }
        producer {
          nextToken
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserPact = /* GraphQL */ `
  subscription OnDeleteUserPact {
    onDeleteUserPact {
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
        pacts {
          nextToken
        }
        createdAt
        updatedAt
      }
      pact {
        id
        type
        recordTitle
        initBy
        sample
        recordLabel
        labelName
        collaborators
        users {
          nextToken
        }
        performers {
          nextToken
        }
        producer {
          nextToken
        }
        createdAt
        status
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
