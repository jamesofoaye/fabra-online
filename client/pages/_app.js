import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import {ProvideAuth} from '../lib/auth-context';
import "../styles/index.css"
//Connect to backend api stuff
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
  uri:"https://mysterious-everglades-90632.herokuapp.com/graphql"
})

const theme = extendTheme({
  colors: {
    brand: {
      100: "#3f2121",
      200: "#9f8542",
    },
  },
})

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
