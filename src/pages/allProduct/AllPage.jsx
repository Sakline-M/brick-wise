/* eslint-disable no-unused-vars */
import React from 'react'
import NewObject from '../../components/Objects/NewObject'
import OtherObjects from '../../components/Objects/OtherObjects'
import Footer from '../../components/footer/Footer'

const AllPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-12">
    <NewObject />
    <OtherObjects/>
    {/* <Footer/> */}
  </div>
  )
}

export default AllPage