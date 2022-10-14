import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Layout from './components/Layout'

const client = new ApolloClient({
  uri:"https://valued-stallion-50.hasura.app/v1/graphql",
  cache:new InMemoryCache(),
  headers:{
    "x-hasura-admin-secret":"RFyaXLSQxnWPxxGEDjluqUtQ1AstFr366WUqe4iqMFY0mHoFfKlVeNUBz8qINazl"
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
}

export default MyApp
