import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import Home from "components/pages/Home";
import Login from "components/pages/Login";

const GlobalStyle = createGlobalStyle`
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
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
