import { FC, useState, InputHTMLAttributes } from "react"
import styled from "styled-components"
import { Input } from 'components/common';

const PasswordInputWrapper = styled.div`
  display: flex;
  ~div {
    margin-bottom: 8px;
  }
`

const PasswordInputStyled = styled(Input)
  .attrs(() => ({
    //placeholder: 'Password'//TODO: checkout why this doesn't work XD
  }))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background: ${({theme}) => theme.background};
    border: 1px solid ${({theme}) => theme.backgroundContrast};
  `;

const ToggleButton = styled.div`
  height: 40px;
  background: ${({theme}) => theme.background};
  border: 1px solid ${({theme}) => theme.backgroundContrast};
  color: ${({theme}) => theme.fontColor};
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
`


interface Props extends InputHTMLAttributes<HTMLInputElement> {}
const PasswordInput: FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <>
    <PasswordInputWrapper>
      <PasswordInputStyled type={showPassword ? 'text' : 'password'} {...props} />
      <ToggleButton onClick={() => setShowPassword(s => !s)} >
        {showPassword ? 'Hide' : 'Show'}
      </ToggleButton>
    </PasswordInputWrapper>
    </>
  )
}

export {PasswordInput}