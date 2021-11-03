import { ChakraProvider } from "@chakra-ui/react"

// CHAKRA THEME
import customTheme from "../theme";

// TYPES
import {AppLayoutProps} from "../types";

function MyApp({ Component, pageProps }: AppLayoutProps) {
    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <ChakraProvider theme={customTheme}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
  )
}

export default MyApp