import { ChakraProvider } from "@chakra-ui/react"
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react"
import theme from "./theme"
import Route from './router';
import SmoothScroll from "./components/common/SmoothScroll";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <SmoothScroll>
        <Route />
      </SmoothScroll>
    </ChakraProvider>
  </StrictMode>,
)
