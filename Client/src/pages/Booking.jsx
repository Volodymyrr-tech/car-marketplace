import React from 'react'
import jwt_decode from 'jwt-decode'
import { useState } from 'react'
import '../styles/booking-form.css'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/payment-method.css'
import { useNavigate, useParams } from 'react-router-dom'
import masterCard from '../assets/all-images/master-card.jpg'
import paypal from '../assets/all-images/paypal.jpg'
import '../styles/payment-method.css'
import Modal from 'react-modal'
import axios from 'axios'
Modal.setAppElement('#root')

const Booking = () => {
  const { name: carName } = useParams()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const navigate = useNavigate()
  const [bookInfo, setBookInfo] = useState({
    firstName: '',
    lastName: '',
    fromAddress: '',
    toAddress: '',
    phoneNumber: '',
    date: '',
    comment: '',
  })
  const handleChange = (e) => {
    setBookInfo({
      ...bookInfo,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
      return
    }

    const decodedToken = jwt_decode(token)
    const userId = decodedToken.userId

    try {
      const response = await axios.post(
        `http://localhost:5000/cars/${carName}/booking`,
        { ...bookInfo, userId, carName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setModalIsOpen(true)
    } catch (error) {
      console.error(error)
      console.log(error)
    }
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: '170px',
      padding: '20px',
      borderRadius: '20px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // This will space out your elements
      alignItems: 'center', // This will center your elements
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  }
  return (
    <Container>
      <Row>
        <Form onSubmit={submitHandler}>
          <Col lg="7" className="mt-5">
            <div className="booking-info mt-5">
              <h5 className="mb-4 fw-bold ">Booking Information</h5>
              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                  type="text"
                  name="fromAddress"
                  placeholder="From Address"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                  type="text"
                  name="toAddress"
                  placeholder="To Address"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                  type="date"
                  name="date"
                  placeholder="Journey Date"
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <textarea
                  rows={5}
                  type="textarea"
                  className="textarea"
                  placeholder="Additional wishes"
                  name="comment"
                  onChange={handleChange}
                ></textarea>
              </FormGroup>
            </div>
          </Col>
          <Col lg="5" className="mt-5 mb-5">
            <div className="payment__info mt-5">
              <h5 className="mb-4 fw-bold ">Payment Information</h5>
              {/* <PaymentMethod /> */}
              <div>
                <div className="payment">
                  <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Direct Bank Transfer
                  </label>
                </div>

                <div className="payment mt-3">
                  <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Cheque Payment
                  </label>
                </div>

                <div className="payment mt-3 d-flex align-items-center justify-content-between">
                  <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Master Card
                  </label>

                  <img src={masterCard} alt="" />
                </div>

                <div className="payment mt-3 d-flex align-items-center justify-content-between">
                  <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Paypal
                  </label>

                  <img src={paypal} alt="" />
                </div>
                <div className="payment text-end mt-5">
                  {/* <button type="submit">Confirm</button> */}
                  <button onClick={() => setModalIsOpen(true)}>Confirm</button>
                </div>
                <Modal
                  style={customStyles}
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                >
                  <h2>Our manager will contact you!</h2>
                  <Button
                    style={{ background: '#000d6b', width: '20%' }}
                    onClick={() => setModalIsOpen(false)}
                  >
                    OK
                  </Button>
                </Modal>
              </div>
            </div>
          </Col>
        </Form>
      </Row>
    </Container>
  )
}
export default Booking
