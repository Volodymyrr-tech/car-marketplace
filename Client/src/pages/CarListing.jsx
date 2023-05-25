import React from 'react'
import { Container, Row, Col, Input, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import CarItem from '../components/UI/CarItem'
// import carData from '../assets/data/carData'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CarListing = () => {
  const [carData, setCarData] = useState([])
  const [sort, setSort] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortedCarData, setSortedCarData] = useState([...carData])

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get('http://localhost:5000/cars')
        console.log(res.data)
        setCarData(res.data)
      } catch (error) {
        console.error('Failed to fetch cars: ', error)
      }
    }
    fetchCars()
  }, [])

  useEffect(() => {
    let sortedCars = [...carData]
    if (sort === 'low') {
      sortedCars.sort((a, b) => a.price - b.price)
    } else if (sort === 'high') {
      sortedCars.sort((a, b) => b.price - a.price)
    }
    if (searchTerm) {
      sortedCars = sortedCars.filter((car) =>
        car.carName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    setSortedCarData(sortedCars)
  }, [sort, searchTerm, carData])

  const handleSortChange = (e) => {
    setSort(e.target.value)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5 justify-content-between">
                <div className="d-flex gap-3 ">
                  <span className="d-flex align-items-center gap-2 fs-4 mb-3">
                    <i className="ri-sort-asc"></i> Sort By
                  </span>

                  <FormGroup>
                    <Input
                      type="select"
                      onChange={handleSortChange}
                      bsSize="lg"
                    >
                      <option value="">Select</option>
                      <option value="low">Low to High</option>
                      <option value="high">High to Low</option>
                    </Input>
                  </FormGroup>
                </div>

                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Search by name"
                    onChange={handleSearchChange}
                    bsSize="lg"
                  />
                </FormGroup>
              </div>
            </Col>

            {sortedCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CarListing
