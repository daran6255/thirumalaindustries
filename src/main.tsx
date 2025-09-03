import { ChakraProvider } from "@chakra-ui/react"
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react"
import theme from "./theme"
import Route from './router';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Route />
    </ChakraProvider>
  </StrictMode>,
)
