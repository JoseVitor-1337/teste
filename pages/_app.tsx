import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

import "configs/style"

import customTheme from "styles/theme"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
