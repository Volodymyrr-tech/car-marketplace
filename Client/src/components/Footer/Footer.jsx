import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const quickLinks = [
  {
    path: '/about',
    display: 'About',
  },

  {
    path: '#',
    display: 'Privacy Policy',
  },

  {
    path: '/cars',
    display: 'Car Listing',
  },
  {
    path: '/blogs',
    display: 'Blog',
  },

  {
    path: '/contact',
    display: 'Contact',
  },
]

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>Car Marketplace</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Car Marketplace is not just a car dealership - it's a destination
              for car enthusiasts. Our extensive collection of vehicles, from
              the latest models to classic gems, is carefully curated to meet
              the diverse needs of our customers. Our team of experts is always
              on hand to provide advice and assistance, ensuring you drive away
              with the car that's right for you.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Shop Office</h5>
              <p className="office__info">Lviv, Ukraine</p>
              <p className="office__info">Phone: +09612345633</p>

              <p className="office__info">Email: carshop@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
