import { ApolloClient, InMemoryCache } from '@apollo/client'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { from } from 'apollo-link'

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    // Handle Errors
  }

  forward(operation)
})

const httpLink = new HttpLink({
  uri: 'http://192.168.1.8:4000/graphql',
})

export const client = new ApolloClient({
  link: from([httpLink, errorLink]),
  cache: new InMemoryCache(),
})
