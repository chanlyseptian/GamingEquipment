import React from 'react'
import {ListBrands} from '../'

const Brands = () => {
  return (
    <>
      <div className="row bg-light">
        <h2 className="text-center mt-4 homepage">
          Brand List
        </h2>
      </div>
      <ListBrands/>
    </>
  )
}

export default Brands