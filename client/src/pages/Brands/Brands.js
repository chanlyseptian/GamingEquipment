import React from 'react'
import {ListBrands} from '../'
import {Outlet} from 'react-router-dom'

const Brands = () => {
  return (
    <>
      <div className="row bg-light">
        <h2 className="text-center mt-4 homepage">
          Brand List
        </h2>
      </div>
      <Outlet/>
      <div className="row bg-light vh">

      </div>
    </>
  )
}

export default Brands