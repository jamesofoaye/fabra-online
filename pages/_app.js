import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import {ProvideAuth} from '../lib/auth-context';

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
      <ProvideAuth>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ProvideAuth>
  )
}

export default MyApp
