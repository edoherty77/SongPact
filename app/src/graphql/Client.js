import { ApolloClient, InMemoryCache } from "@apollo/client"
import { onError } from "apollo-link-error"
import { HttpLink } from "apollo-link-http"
import { from } from "apollo-link"

// import { setContext } from "apollo-link-context"

//CURRENT SET UP WITHOUT LOCAL STORAGE
//NEEDS MOBX LOCALSTORAGE
const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    // Handle Errors
  }

  forward(operation)
})

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
})

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
})

//EXAMPLE OF USING REGULAR LOCAL STORAGE
//TRY TO MIMIC THIS WITH MOBX
//I ALREADY SET UP THE BACKEND TO CATCH THE REQUEST

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4444/graphql',
// })

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token')
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token,
//     },
//   }
// })

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// })
