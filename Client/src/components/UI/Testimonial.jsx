import React from 'react'
import Slider from 'react-slick'

import '../../styles/testimonial.css'

import ava01 from '../../assets/all-images/ava-1.jpg'
import ava02 from '../../assets/all-images/ava-2.jpg'
import ava03 from '../../assets/all-images/ava-3.jpg'
import ava04 from '../../assets/all-images/ava-4.jpg'

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I had an amazing experience at Car Marketplace. Their selection of
          vehicles is unparalleled, and the staff was incredibly helpful. They
          made the process of buying a car easy and enjoyable. I couldn't be
          happier with my new car!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ivan Kravchik</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Car Marketplace exceeded all my expectations. Their knowledgeable
          staff guided me through every step of the process, ensuring I found
          the perfect car for my needs. I highly recommend Car Marketplace to
          anyone in the market for a new vehicle.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Olexandra Dimchich</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          The team at Car Marketplace is top-notch. They were patient,
          informative, and genuinely invested in helping me find the right car.
          The quality and variety of their inventory is impressive. I'm thrilled
          with my purchase!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Eugen Matsik</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Buying a car from Car Marketplace was a breeze. Their wide selection
          of vehicles and commitment to customer service made it the best car
          buying experience I've ever had. I love my new car and can't thank the
          Car Marketplace team enough!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Maria Bran</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonial
