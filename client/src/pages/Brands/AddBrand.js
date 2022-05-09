import React, { useState } from 'react'
import { addBrand } from '../../axios/brandAxios'
import { useNavigate, Link } from 'react-router-dom'


const AddBrand = () => {
  const [brand, setBrand] = useState({
    name: "",
    image: "http://via.placeholder.com/100",
  }, [])

  const navigation = useNavigate()

  const submitHandler = () => {
    
    addBrand(brand)
    navigation('/brands')
  }

  return (
    <>
      <div className="row bg-light">
        <div className="w-100 text-center">
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <h5 className="text-secondary text-center m-3">Add Brand</h5>
          <div className="mb-3">
            <label>Name: </label>
            <input
              onChange={(e) => setBrand({ ...brand, name: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Image: </label>
            <input
              onChange={(e) => setBrand({ ...brand, image: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Enter image link..">

            </input>
          </div>

          <div className="mb-3">
            <Link to="/brands" className="btn btn-block btn-secondary mx-1">Back</Link>
            <button onClick={submitHandler} className="btn btn-block btn-danger"> Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBrand