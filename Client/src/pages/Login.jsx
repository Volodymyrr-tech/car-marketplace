import { useState } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
import '../styles/login-registration.css'

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    if (e.target.name === 'password') {
      setUserData({ ...userData, [e.target.name]: e.target.value })
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/login', userData)
      console.log(response.data) // The new user's data
      // Here you can update your UI based on the response
    } catch (error) {
      console.error(error)
    }
    setUserData({
      email: '',
      password: '',
    })
  }

  return (
    <Row className="justify-content-center">
      <Col lg={4} md={6}>
        <Form onSubmit={handleSubmit} className="styledForm">
          <FormGroup>
            <Label for="exampleEmail" className="formLabel">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              className="formInput"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" className="formLabel">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              className="formInput"
            />
          </FormGroup>

          <Button
            className="submitBtn"
            style={{
              backgroundColor: '#000d6b',
            }}
          >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Register
