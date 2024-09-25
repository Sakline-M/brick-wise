/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer flex justify-between items-center'>
        <p className='text-[14px] font-serif font-semibold text-[#c4cad3]'>Diese Plattform wird von Brickwise Investment GmbH betrieben, die vertraglich gebundener Vermittler gemäß § 3 (2) WpIG der Effecta GmbH, Florstadt, ist.</p>

        <div className="designby text-[16px] font-serif font-semibold text-[#c4cad3]">
            <p >Develop by </p>
            <Link to={"https://pixelwebmakers.com/"}>Pixel Web Makers</Link>
        </div>
    </div>
  )
}

export default Footer