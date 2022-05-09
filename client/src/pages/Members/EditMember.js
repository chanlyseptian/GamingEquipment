import React, { useState, useEffect } from 'react'
import { accountMember, editMember } from '../../axios/memberAxios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditMember = () => {
  const [member, setMember] = useState({
    name: "",
    role: "",
    status: ""
  }, [])

  const navigation = useNavigate()
  const params = useParams()

  const getMemberInfo = () => {
    const { id } = params
    accountMember(+id, result => {
      setMember({
        name: result.name,
        role: result.role,
        status: result.status
      })
    })
  }

  useEffect(() => {
    getMemberInfo()
  }, [])

  const submitHandler = () => {
    editMember(+params.id, member)
    navigation('/members')
  }

  return (
    <>
      <div className="row bg-light">
        <div className="w-100 text-center">
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <h5 className="text-secondary text-center m-3">Edit Member</h5>
          <div className="mb-3">
            <label>Name: </label>
            <input
              value={member.name}
              onChange={(e) => setMember({ ...member, name: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Role: </label>
            <input
              value={member.role}
              onChange={(e) => setMember({ ...member, role: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Status: </label>
            <input
              value={member.status}
              onChange={(e) => setMember({ ...member, status: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>

          <div className="mb-3">
            <Link to="/members" className="btn btn-block btn-secondary mx-1">Back</Link>
            <button onClick={() => submitHandler()} className="btn btn-block btn-danger"> Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditMember