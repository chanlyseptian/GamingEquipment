import React, { useState, useEffect } from 'react'
import { getMembers, removeMember } from '../../axios/memberAxios'
import LoadingBar from '../../helpers/LoadingBar';
import {
  Link, useNavigate
} from 'react-router-dom'

const ListMembers = () => {
  const [members, setMembers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getMembers(result => setMembers(result))
  }, [members])


  const deleteHandler = (id) => {
    removeMember(id)
    navigate('/members')

  }


  return (
    <>
      <div className="row bg-light">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link to="/members/create" className="btn btn-sm btn-danger btn-list my-2">
              <span className="me-2">
              </span>
              + Add Member
            </Link>
          </div>
          <div className="w-100">
            <table className="table table-borderd text-center">
              <thead>
                <tr className="table-secondary">
                  <th>Id</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  members.length !== 0 ?
                    members.map(member => {
                      const { id, name, role, status } = member;
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{role}</td>
                          <td>{status}</td>
                          <td>
                            <Link to={`/members/edit/${id}`} className="btn btn-sm btn-success mx-2">Edit</Link>
                            <button onClick={() => deleteHandler(+id)} className="btn btn-sm btn-danger">Delete</button>
                          </td>
                        </tr>)
                    }) : <LoadingBar />
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListMembers