import React, { useState, useEffect } from 'react'
import { getItems, removeItem } from '../../axios/itemAxios'
import LoadingBar from '../../helpers/LoadingBar';
import {
  Link, useNavigate
} from 'react-router-dom'

const ListItems = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getItems(result => setItems(result))
  }, [items])


  const deleteHandler = (id) => {
    removeItem(id)
    navigate('/')

  }

  return (
    <>
      <div className="row bg-light">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link to="/items/create" className="btn btn-sm btn-danger btn-list my-2">
              <span className="me-2">
              </span>
              + Add Equipment
            </Link>
          </div>
          <div className="">
            <table className="table table-borderd text-center">
              <thead>
                <tr className="table-secondary">
                  <th>Member Id</th>
                  <th>Member Name</th>
                  <th>Equipment Name</th>
                  <th>Image</th>
                  <th>Brand Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  items.length !== 0 ?
                    items.map(item => {
                      return (
                        <tr key={item.id}>
                          <td>{item.member.id}</td>
                          <td>{item.member.name}</td>
                          <td>{item.name}</td>
                          <td className="w-25">
                            <img className="w-50" src={item.image} alt="" />
                          </td>
                          <td>{item.brand.name}</td>
                          <td>{item.category}</td>
                          <td>{item.price}</td>

                          <td>
                            <Link to={`/items/edit/${item.id}`} className="btn btn-sm btn-success mx-2">Edit</Link>
                            <button onClick={() => deleteHandler(+item.id)} className="btn btn-sm btn-danger">Delete</button>
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

export default ListItems