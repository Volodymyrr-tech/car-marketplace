import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../components/UI/FindCarForm'
import AboutSection from '../components/UI/AboutSection'
import ServicesList from '../components/UI/ServicesList'
import CarItem from '../components/UI/CarItem'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import Testimonial from '../components/UI/Testimonial'

import BlogList from '../components/UI/BlogList'

const Home = () => {
  const [carData, setCarData] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get('http://localhost:5000/home')
        console.log(res.data)
        setCarData(res.data)
      } catch (error) {
        console.error('Failed to fetch cars: ', error)
      }
    }
    fetchCars()
  }, [])
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col
                lg="8"
                md="8"
                sm="12"
                className="d-flex align-items-center justify-content-center"
              >
                <i class="ri-arrow-left-double-fill"></i>
                <p
                  style={{
                    fontSize: '1.25rem',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  At Car Marketplace, we believe in the power of mobility and
                  the joy of driving. Our mission is to provide a seamless car
                  buying experience, offering a wide range of vehicles to cater
                  to every taste and need. Our knowledgeable staff is always
                  ready to assist you, ensuring you leave our showroom with the
                  car of your dreams.
                </p>
                <i class="ri-arrow-right-double-fill"></i>
                {/* <FindCarForm /> */}
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              // <CarItem item={item} key={item.id} />
              <CarItem item={item} key={item.id}>
                <img src={item.imgurl} alt={item.carname} />
              </CarItem>
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
