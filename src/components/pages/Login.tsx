import { PageLayout, Input } from 'components/common'
import { ChangeEvent, useState } from 'react'
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
`

const Login = () => {
  const [formFields, setFormFields] = useState({username: '', password: ''})

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields(s => ({...s, [e.target.name]: e.target.value}))
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input value={formFields.username} type="text" name="username" placeholder='Username' onChange={handleInputChange} />
        <Input value={formFields.password} type="password" name="password" placeholder='Password' onChange={handleInputChange} />
      </Form>
    </PageLayout>
  )
}

export default Login
