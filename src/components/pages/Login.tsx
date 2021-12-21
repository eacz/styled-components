import { PageLayout, Input, PasswordInput, Button, Spinner } from 'components/common'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
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

let timeout: undefined | ReturnType<typeof setTimeout>;

const Login = () => {
  const [formFields, setFormFields] = useState({username: '', password: ''})
  const [loading, setLoading] = useState(false)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields(s => ({...s, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    timeout = setTimeout(() => setLoading(false), 3000)
  }

  useEffect(() => {
    return () => {
      if(timeout){
        clearTimeout(timeout)
      }
    } 
  }, [])

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading 
          ? <Spinner />
          :
            <>
              <Input value={formFields.username} type="text" name="username" placeholder='Username' onChange={handleInputChange} />
              <PasswordInput value={formFields.password} name="password" placeholder='Password' onChange={handleInputChange} />
            </>
        }
          
        <Button disabled={loading} large type="submit">
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && 
          <>
            <p className='alt-text' >or</p>
            <Button secondary type="button">Register</Button>
          </>
        }
          
      </Form>
    </PageLayout>
  )
}

export default Login
