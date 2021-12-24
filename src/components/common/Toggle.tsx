import { ThemeContext } from "context/ThemeContext";
import { useContext } from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background-image: linear-gradient(to bottom, ${({theme}) => theme.primaryColor }, ${({theme}) => theme.secondaryColor });
`
const Notch = styled.div<{isActive: boolean}>`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${p => p.isActive ? '26px' : '1px'});
`

const Toggle = () => {
  const { theme: { type: themeType }, setLightMode, setDarkMode } = useContext(ThemeContext)

  const toggleTheme = () => {
    if(themeType === 'dark'){ 
      setLightMode()
    } else {
      setDarkMode()
    }
  }
  
  return (
    <ToggleWrapper onClick={toggleTheme}>
      <Notch isActive={themeType === 'dark'} />
    </ToggleWrapper>
  )
}

export { Toggle }