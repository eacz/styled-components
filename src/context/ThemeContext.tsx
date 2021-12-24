import { darkTheme, lightTheme } from 'components/themes';
import { createContext, useState } from 'react'
import { DefaultTheme } from 'styled-components';

interface ThemeContextProps {
  theme: DefaultTheme,
  setLightMode: () => void,
  setDarkMode: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProps)

const ThemeProvider = ({children}: any) => {

  const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme)

  const setLightMode = () => {
    setTheme(lightTheme)
  }
  
  const setDarkMode = () => {
    setTheme(darkTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkMode,
        setLightMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider