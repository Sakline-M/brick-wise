/* eslint-disable no-unused-vars */
import React from 'react'
import NewObject from '../../components/Objects/NewObject'
import OtherObjects from '../../components/Objects/OtherObjects'
import Footer from '../../components/footer/Footer'

const ResidentialPage = () => {
  return (
    <div className="container  mx-auto px-4 ">
    <NewObject />
    <OtherObjects/>
    <Footer/>
  </div>
  )
}

export default ResidentialPage