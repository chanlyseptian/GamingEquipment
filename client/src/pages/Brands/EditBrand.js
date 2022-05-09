import React, { useState, useEffect } from 'react'
import { accountBrand, editBrand } from '../../axios/brandAxios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditBrand = () => {
  const [brand, setBrand] = useState({
    name: "",
    image: "",
    
  }, [])

  const navigation = useNavigate()
  const params = useParams()

  const getBrandInfo = () => {
    const { id } = params
    accountBrand(+id, result => {
      setBrand({
        name: result.name,
        image: result.image,
      })
    })
  }

  useEffect(() => {
    getBrandInfo()
  }, [])

  const submitHandler = () => {
    editBrand(+params.id, brand)
    navigation('/brands')
  }

  return (
    <>
      <div className="row bg-light">
        <div className="w-100 text-center">
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <h5 className="text-secondary text-center m-3">Edit Brand</h5>
          <div className="mb-3">
            <label>Name: </label>
            <input
              value={brand.name}
              onChange={(e) => setBrand({ ...brand, name: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Image: </label>
            <input
              value={brand.image}
              onChange={(e) => setBrand({ ...brand, image: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
         

          <div className="mb-3">
            <Link to="/brands" className="btn btn-block btn-secondary mx-1">Back</Link>
            <button onClick={() => submitHandler()} className="btn btn-block btn-danger"> Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditBrand