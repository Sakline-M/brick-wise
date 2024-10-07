/* eslint-disable no-unused-vars */
import React from 'react'
import SupportHeader from '../../components/supportComponents/SupportHeader'
import SupportHero from '../../components/supportComponents/SupportHero'
import SupportSidebar from '../../components/supportComponents/SupportSidebar'

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <SupportHeader />
    <div className="flex-grow container mx-auto flex">

      {/* Main Body Section */}
      <div className="w-2/3 p-6">
        <SupportHero />
      </div>

      {/* Sidebar */}
      <SupportSidebar />
      
    </div>
  </div>
  )
}

export default Support