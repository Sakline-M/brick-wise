/* eslint-disable no-unused-vars */
import React from 'react'
import image1 from "../../../public/building.jpg"

const SupportSidebar = () => {
    return (
        <aside className="w-1/3 bg-white shadow-lg p-6 ">
          <h3 className="text-lg font-semibold mb-4">Weitere Objekte</h3>
          <div className="space-y-4">
            
            <div className="border rounded p-4">
              <img src={image1} alt="object" className="mb-2 rounded-lg h-[175px] w-full object-cover" />
              <h4 className="font-semibold">Photovoltaik Anlage</h4>
              <p>6,12% p.a.</p>
            </div>

          </div>
          
        </aside>
      );
}

export default SupportSidebar