import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { ProvideAuth } from '../lib/auth-context';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"
import "../styles/globals.css";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#3f2121",
      200: "#9f8542",
    },
  },
})

//Apollo Set up
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ProvideAuth>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ProvideAuth>
    </ApolloProvider>
  )

}

export default MyApp
