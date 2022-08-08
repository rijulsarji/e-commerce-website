import React from 'react'

import {
  AiFillInstagram,
  AiFillAmazonCircle,
} from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Jahaaz Audio Devices All Rights Reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiFillAmazonCircle />
      </p>
    </div>
  )
}

export default Footer