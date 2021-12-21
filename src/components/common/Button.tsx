import styled, { css } from 'styled-components'

interface Props {
  readonly secondary?: boolean
  readonly large?: boolean
}

const Button = styled.button<Props>`
  color: white;
  background: ${({secondary}) => secondary ? '#fdd54f' : '#f8049c' };
  font-weight: bold;
  padding: 8px;
  ${({large}) => large ? css`
    padding: 20px;
    border-radius: 5px;
    font-size: 1.5rem;
  `
  : css`
    padding: 8px;
    border-radius: 4px;
    font-size: 1rem;
  `
}  
  box-shadow: none;
  border: none;
  width: 100%;  
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }

  &:hover {
    cursor: pointer;
  }
`;

export { Button }