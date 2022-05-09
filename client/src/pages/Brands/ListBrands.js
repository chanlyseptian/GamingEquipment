import React, { useState, useEffect } from 'react'
import { getBrands, removeBrand } from '../../axios/brandAxios'
import LoadingBar from '../../helpers/LoadingBar';
import {
  Link, useNavigate
} from 'react-router-dom'

const ListBrands = () => {
  const [brands, setBrands] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getBrands(result => setBrands(result))
  }, [brands])


  const deleteHandler = (id) => {
    removeBrand(id)
    navigate('/brands')

  }

  return (
    <>
      <div className="row bg-light">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link to="/brands/create" className="btn btn-sm btn-danger btn-list my-2">
              <span className="me-2">
              </span>
              + Add Brand
            </Link>
          </div>
          <div className="w-100">
            <table className="table table-borderd text-center">
              <thead>
                <tr className="table-secondary">
                  <th>Id</th>
                  <th>Brand Name</th>
                  <th>Brand Logo</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  brands.length !== 0 ?
                    brands.map(brand => {
                      const { id, name, image } = brand;
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td className="w-50">
                            <img className="w-25" src={image} alt="" />
                          </td>
                          <td>
                            <Link to={`/brands/edit/${id}`} className="btn btn-sm btn-success mx-2">Edit</Link>
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

export default ListBrands