import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from "react-icons/bs";
import { runConfetti } from '../lib/utils';
import { Context } from '../context/StateContext';

const Success = () => {

  const { setCartItems, setTotalPrice, setTotalQuantities } = useContext(Context);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runConfetti();
  }, [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for your receipt.</p>
        <p className='description'>If you have any questions, please email<a className='email' href="mailto:rijulsarji@gmail.com">rijulsarji@gmail.com</a></p>
        <Link href="/">
          <button type="button" width={300} className='btn'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default Success