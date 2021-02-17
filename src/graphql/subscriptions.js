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
      contacts
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
      contacts
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
      contacts
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
export const onUpdatePact = /* GraphQL */ `
  subscription OnUpdatePact {
    onUpdatePact {
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
export const onDeletePact = /* GraphQL */ `
  subscription OnDeletePact {
    onDeletePact {
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
export const onCreatePerformer = /* GraphQL */ `
  subscription OnCreatePerformer {
    onCreatePerformer {
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
export const onUpdatePerformer = /* GraphQL */ `
  subscription OnUpdatePerformer {
    onUpdatePerformer {
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
export const onDeletePerformer = /* GraphQL */ `
  subscription OnDeletePerformer {
    onDeletePerformer {
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
export const onCreateProducer = /* GraphQL */ `
  subscription OnCreateProducer {
    onCreateProducer {
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
export const onUpdateProducer = /* GraphQL */ `
  subscription OnUpdateProducer {
    onUpdateProducer {
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
export const onDeleteProducer = /* GraphQL */ `
  subscription OnDeleteProducer {
    onDeleteProducer {
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
