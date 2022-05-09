import React from 'react'
import {ListMembers} from '../'

const Members = () => {
  return (
    <>
      <div className="row bg-light">
        <h2 className="text-center mt-4 homepage">
          Member List
        </h2>
      </div>
      <ListMembers/>
    </>
  )
}

export default Members