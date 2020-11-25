import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri: 'http://192.168.1.8:4000/graphql',
})

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})
