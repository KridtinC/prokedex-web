import Layout from '../components/layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { graphqlClient } from '../utils/apollo';
import { ApolloProvider } from '@apollo/client';


export default function App({ Component, pageProps }: AppProps) {
  const client = graphqlClient  
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>


  )
}
