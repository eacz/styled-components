import { PageLayout, Input, PasswordInput, Button } from 'components/common'
import { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  color: black;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;

  }
`

const Login = () => {
  const [formFields, setFormFields] = useState({username: '', password: ''})

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields(s => ({...s, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input value={formFields.username} type="text" name="username" placeholder='Username' onChange={handleInputChange} />
        <PasswordInput value={formFields.password} name="password" placeholder='Password' onChange={handleInputChange} />
        
        <Button large type="submit">Login</Button>
        <p className='alt-text' >or</p>
        <Button secondary type="button">Register</Button>
      
      </Form>
    </PageLayout>
  )
}

export default Login
