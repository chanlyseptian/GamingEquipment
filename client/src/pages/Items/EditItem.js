import React, { useState, useEffect } from 'react'
import { accountItem, editItem } from '../../axios/itemAxios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditItem = () => {
  const [item, setItem] = useState({
    name: "",
    category: "",
    price: 0,
    image: "",
    memberId: "",
    brandId: "",

  }, [])

  const navigation = useNavigate()
  const params = useParams()

  const getItemInfo = () => {
    const { id } = params
    accountItem(+id, result => {
      setItem({
        name: result.name,
        category: result.category,
        price: +result.price,
        image: result.image,
        memberId: +result.memberId,
        brandId: +result.brandId,
      })
    })
  }

  useEffect(() => {
    getItemInfo()
  }, [])


  const submitHandler = () => {
    editItem(+params.id, item)
    navigation('/')
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
              value={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Category: </label>
            <input
              value={item.category}
              onChange={(e) => setItem({ ...item, category: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Price: </label>
            <input
              value={item.price}
              onChange={(e) => setItem({ ...item, price: e.target.value })}
              type="number"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Image: </label>
            <input
              value={item.image}
              onChange={(e) => setItem({ ...item, image: e.target.value })}
              type="text"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Member Id: </label>
            <input
              value={item.memberId}
              onChange={(e) => setItem({ ...item, memberId: e.target.value })}
              type="number"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label>Brand Id: </label>
            <input
              value={item.brandId}
              onChange={(e) => setItem({ ...item, brandId: e.target.value })}
              type="number"
              className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <Link to="/" className="btn btn-block btn-secondary mx-1">Back</Link>
            <button onClick={() => submitHandler()} className="btn btn-block btn-danger"> Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditItem