import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const graphqlClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://beta.pokeapi.co/graphql/v1beta',
    }),
    ssrMode: typeof window === 'undefined',
});