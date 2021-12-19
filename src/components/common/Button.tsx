import styled from 'styled-components'

const Button = styled.button`
  color: white;
  background: #f8049c;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1rem;
  border: none;
  width: 100%;  
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button }