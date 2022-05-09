import React, { useState } from 'react'
import { addItem } from '../../axios/itemAxios'
import { useNavigate, Link } from 'react-router-dom'

const AddItem = () => {
  const [item, setItem] = useState({
    name: "",
    category: "",
    price: 0,
    image: "http://via.placeholder.com/100",
    memberId: "",
    brandId: "",

  }, [])

  const navigation = useNavigate()

  const submitHandler = () => {

    addItem(item)
    navigation('/')
  }

  return (
    <>
      <div className="row bg-light">
        <div className="w-100 text-center">
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <h5 className="text-secondary text-center m-3">Add Equipment</h5>
          <div className="mb-3">
            <label>Name: </label>
            <input
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Category: </label>
            <input
              onChange={(e) => setItem({ ...item, category: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Price: </label>
            <input
              onChange={(e) => setItem({ ...item, price: e.target.value })}
              type="number"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Image: </label>
            <input
              onChange={(e) => setItem({ ...item, image: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Enter equipment image link...">
            </input>
          </div>
          <div className="mb-3">
            <label>Member Id: </label>
            <input
              onChange={(e) => setItem({ ...item, memberId: e.target.value })}
              type="number"
              className="form-control"
              placeholder="Enter member id...">
            </input>
          </div>
          <div className="mb-3">
            <label>Brand Id: </label>
            <input
              onChange={(e) => setItem({ ...item, brandId: e.target.value })}
              type="number"
              className="form-control"
              placeholder="Enter brand id...">
            </input>
          </div>
          <div className="mb-3">
            <Link to="/" className="btn btn-block btn-secondary mx-1">Back</Link>
            <button onClick={submitHandler} className="btn btn-block btn-danger"> Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddItem