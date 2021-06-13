import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
<<<<<<< HEAD:client/pages/_app.js
import { ProvideAuth } from '../lib/auth-context';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"
import "../styles/globals.css";
=======
import {ProvideAuth} from '../lib/auth-context';

>>>>>>> e21045ffd686adb83c446bb3c775599071c0491e:pages/_app.js
const theme = extendTheme({
  colors: {
    brand: {
      100: "#3f2121",
      200: "#9f8542",
    },
  },
})

<<<<<<< HEAD:client/pages/_app.js
//Apollo Set up
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
=======
function MyApp({ Component, pageProps }) {
  return (
>>>>>>> e21045ffd686adb83c446bb3c775599071c0491e:pages/_app.js
      <ProvideAuth>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ProvideAuth>
<<<<<<< HEAD:client/pages/_app.js
    </ApolloProvider>
  )

=======
  )
>>>>>>> e21045ffd686adb83c446bb3c775599071c0491e:pages/_app.js
}

export default MyApp
