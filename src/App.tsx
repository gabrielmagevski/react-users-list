import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes";
import { GlobalStyles } from "./styles/Globalstyles";

function App() {
  return (
      <>
        <GlobalStyles /> 
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </>
  )
}

export default App
