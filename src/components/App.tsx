import { Button } from "components/common";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  p {
    font-size: 8px;
  }

  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script', cursive;
  }

`

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>App</h1>
      <Button>
        Test
      </Button>
    </>
  );
}

export default App;
