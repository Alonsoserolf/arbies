import ApolloClient, { InMemoryCache } from 'apollo-boost'

let apolloClient = null

function create(initialState) {
  const isBrowser = typeof window !== 'undefined'
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo(initialState) {
  if (typeof window === 'undefined')
    return create(initialState)

  if (!apolloClient)
    apolloClient = create(initialState)

  return apolloClient
}
