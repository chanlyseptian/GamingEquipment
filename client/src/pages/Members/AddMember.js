import React, { useState } from 'react'
import { addMember } from '../../axios/memberAxios'
import { useNavigate, Link } from 'react-router-dom'


const AddMember = () => {
  const [member, setMember] = useState({
    name: "",
    role: "",
    status: ""
  }, [])

  const navigation = useNavigate()

  const submitHandler = () => {
    
    addMember(member)
    navigation('/members')
  }

  return (
    <>
      <div className="row bg-light">
        <div className="w-100 text-center">
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <h5 className="text-secondary text-center m-3">Add Member</h5>
          <div className="mb-3">
            <label>Name: </label>
            <input
              onChange={(e) => setMember({ ...member, name: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Role: </label>
            <input
              onChange={(e) => setMember({ ...member, role: e.target.value })}
              type="text"
              className="form-control">

            </input>
          </div>
          <div className="mb-3">
            <label>Status: </label>
            <input
              onChange={(e) => setMember({ ...member, status: e.target.value })}
              type="text"
              className="form-control">

            </input>
          </div>

          <div className="mb-3">
            <Link to="/members" className="btn btn-block btn-secondary mx-1">Back</Link>
            <button onClick={submitHandler} className="btn btn-block btn-danger"> Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddMember