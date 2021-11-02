import { ChakraProvider } from "@chakra-ui/react"
import {AppProps} from "next/app";

// CHAKRA THEME
import customTheme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp