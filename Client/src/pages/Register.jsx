import { useState } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
import '../styles/login-registration.css'

const Register = () => {
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    if (e.target.name === 'password') {
      setUserData({ ...userData, [e.target.name]: e.target.value })
    } else if (e.target.name === 'passwordConfirmation') {
      setPasswordConfirmation(e.target.value)
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (userData.password !== passwordConfirmation) {
      alert('Passwords do not match!')
      return
    }
    try {
      const response = await axios.post(
        'http://localhost:5000/register',
        userData
      )
      console.log(response.data) // The new user's data
      // Here you can update your UI based on the response
    } catch (error) {
      console.error(error)
    }
    setUserData({
      name: '',
      email: '',
      password: '',
    })
    setPasswordConfirmation('')
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col lg={4} md={6}>
          <Form
            onSubmit={handleSubmit}
            style={{ margin: '7rem auto 8rem' }}
            className="styledForm"
          >
            <FormGroup>
              <Label
                for="name"
                // style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                className="formLabel"
              >
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={userData.name}
                onChange={handleChange}
                style={{ fontSize: '1.2rem' }}
                className="formInput"
              />
            </FormGroup>
            <FormGroup>
              <Label
                for="exampleEmail"
                // style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                className="formLabel"
              >
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleChange}
                style={{ fontSize: '1.2rem' }}
                className="formInput"
              />
            </FormGroup>
            <FormGroup>
              <Label
                for="examplePassword"
                // style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                className="formLabel"
              >
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                type="password"
                value={userData.password}
                onChange={handleChange}
                style={{ fontSize: '1.2rem' }}
                className="formInput"
              />
            </FormGroup>
            <FormGroup>
              <Label
                for="examplePassword"
                // style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                className="formLabel"
              >
                Repeat your password
              </Label>
              <Input
                id="examplePassword"
                name="passwordConfirmation"
                type="password"
                value={passwordConfirmation}
                onChange={handleChange}
                style={{ fontSize: '1.2rem' }}
                className="formInput"
              />
            </FormGroup>
            <Button
              style={{
                backgroundColor: '#000d6b',
              }}
              className="submitBtn"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row></Row>
    </>
  )
}

export default Register
