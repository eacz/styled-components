import styled, { css, StyledProps } from 'styled-components'

interface Props {
  readonly secondary?: boolean
  readonly large?: boolean
}

const largeStyles = ({large}: StyledProps<Props>) => {
  if(large){
    return css`
      padding: 20px;
      border-radius: 5px;
      font-size: 1.5rem;
    `
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1rem;
    `
  }
}

const Button = styled.button<Props>`
  color: white;
  background: ${({secondary, theme}) => secondary ? theme.secondaryColor : theme.primaryColor };
  font-weight: bold;
  padding: 8px;
  ${largeStyles}
  box-shadow: none;
  border: none;
  width: 100%;  
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
    cursor: default !important;
  }

  &:hover {
    cursor: pointer;
  }
`;

//propTypes in case of using js
//Button.propTypes = {
//  large: PropTypes.bool,
//  secondary: PropTypes.bool,
//}

export { Button }