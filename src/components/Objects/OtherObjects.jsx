/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../card/Card'

const OtherObjects = () => {
  return (
    <div className="container border-double  pb-[20px] px-[20px]  mt-[40px]">
      <div className="title text-[25px] font-bold mt-[10px] mb-[15px]">
      Weitere Objekte
      </div>
      <div className="card flex flex-row justify-between flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default OtherObjects