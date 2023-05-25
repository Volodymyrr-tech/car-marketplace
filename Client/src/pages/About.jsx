import React from 'react'

import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'

import driveImg from '../assets/all-images/drive.jpg'
import OurMembers from '../components/UI/OurMembers'
import '../styles/about.css'

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  At Car Marketplace, we believe in the freedom of choice.
                  That's why we offer a wide range of vehicles to suit every
                  lifestyle and budget. Our knowledgeable staff is committed to
                  helping you find the perfect car, providing you with all the
                  information you need to make an informed decision. Experience
                  the Car Marketplace difference today.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+09612345633</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  )
}

export default About
