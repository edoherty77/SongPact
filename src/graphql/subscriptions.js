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
`;
export const onCreateFriend = /* GraphQL */ `
  subscription OnCreateFriend {
    onCreateFriend {
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
`;
export const onUpdateFriend = /* GraphQL */ `
  subscription OnUpdateFriend {
    onUpdateFriend {
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
`;
export const onDeleteFriend = /* GraphQL */ `
  subscription OnDeleteFriend {
    onDeleteFriend {
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
`;
export const onCreateUserPact = /* GraphQL */ `
  subscription OnCreateUserPact {
    onCreateUserPact {
      id
      userId
      pactId
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
`;
export const onUpdateUserPact = /* GraphQL */ `
  subscription OnUpdateUserPact {
    onUpdateUserPact {
      id
      userId
      pactId
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
`;
export const onDeleteUserPact = /* GraphQL */ `
  subscription OnDeleteUserPact {
    onDeleteUserPact {
      id
      userId
      pactId
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
`;
