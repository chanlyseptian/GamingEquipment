import React from 'react'
import {ListItems} from './'
import {Outlet} from 'react-router-dom'

const Homepage = () => {
  return (
    <>
      <div className="row bg-light">
        <h2 className="text-center mt-4 homepage">
          Member's Gaming Equipment
        </h2>
      </div>
      <Outlet/>
    </>
  )
}

export default Homepage