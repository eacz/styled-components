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
  `;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
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