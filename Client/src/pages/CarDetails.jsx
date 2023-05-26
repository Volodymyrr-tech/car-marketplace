import React, { useState, useEffect } from 'react'

// import carData from '../assets/data/carData'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/payment-method.css'
import axios from 'axios'

const CarDetails = () => {
  const [singleCarItem, setSingleCarItem] = useState(null)
  const { name } = useParams()

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/cars/${name}`)
        console.log(res.data)
        setSingleCarItem(res.data)
      } catch (error) {
        console.error('Failed to fetch cars: ', error)
      }
    }
    fetchCars()
  }, [name])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [singleCarItem])
  if (!singleCarItem) {
    return <div>Loading...</div>
  }
  return (
    <Helmet title={singleCarItem.carname}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgurl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carname}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.price}
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: '#f9a826' }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: '4rem' }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: '#f9a826' }}
                    ></i>{' '}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: '#f9a826' }}
                    ></i>{' '}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: '#f9a826' }}
                    ></i>{' '}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: '2.8rem' }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: '#f9a826' }}></i>{' '}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: '#f9a826' }}
                    ></i>{' '}
                    {singleCarItem.seattype}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: '#f9a826' }}
                    ></i>{' '}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="payment text-end mt-5"
                style={{ marginBottom: '10rem' }}
              >
                <Link to={`/cars/${name}/$`}>
                  <button>Request a call</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CarDetails
