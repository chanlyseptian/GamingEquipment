import React from 'react'
import {ListMembers} from '../'
import {Outlet} from 'react-router-dom'

const Members = () => {
  return (
    <>
      <div className="row bg-light ">
        <h2 className="text-center mt-4 homepage">
          Member List
        </h2>
      </div>
      <Outlet/>
      <div className="row bg-light vh">

      </div>
    </>
  )
}

export default Members