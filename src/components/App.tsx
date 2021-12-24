import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Home from "components/pages/Home";
import Login from "components/pages/Login";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({theme}) => theme.background};
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script', cursive;
  }
`

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
