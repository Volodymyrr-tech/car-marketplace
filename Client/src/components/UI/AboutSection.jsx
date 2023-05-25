import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === 'aboutPage'
          ? { marginTop: '0px' }
          : { marginTop: '280px' }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Car Marketplace</h2>
              <p className="section__description">
                Welcome to Car Marketplace, where we bring the best of the
                automobile world to your fingertips. Our vast selection of
                vehicles ensures that we have something for everyone, whether
                you're looking for a sleek sports car or a reliable family
                vehicle. Our dedicated team is here to guide you every step of
                the way, making your car buying experience smooth and enjoyable.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>
                  Driving Innovation in Car Sales at Car Marketplace.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Car Marketplace:
                  Pioneers in Customer Satisfaction
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Setting the Standard
                  in Auto Retail at Car Marketplace.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Car Marketplace:
                  Leaders in Vehicle Variety and Quality.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutSection
