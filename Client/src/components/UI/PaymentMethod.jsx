import React from 'react'
import { useState } from 'react'

import masterCard from '../../assets/all-images/master-card.jpg'
import paypal from '../../assets/all-images/paypal.jpg'
import '../../styles/payment-method.css'
import { Button } from 'reactstrap'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const PaymentMethod = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
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
        <button onClick={() => setModalIsOpen(true)}>Request a call</button>
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
  )
}

export default PaymentMethod
