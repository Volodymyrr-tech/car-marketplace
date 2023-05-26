import { Container, Row, Col } from 'reactstrap'

import BookingForm from '../components/UI/BookingForm'
import PaymentMethod from '../components/UI/PaymentMethod'
import '../styles/payment-method.css'

const Booking = () => {
  return (
    <Container>
      <Row>
        <Col lg="7" className="mt-5">
          <div className="booking-info mt-5">
            <h5 className="mb-4 fw-bold ">Booking Information</h5>
            <BookingForm />
          </div>
        </Col>

        <Col lg="5" className="mt-5 mb-5">
          <div className="payment__info mt-5">
            <h5 className="mb-4 fw-bold ">Payment Information</h5>
            <PaymentMethod />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Booking
