import React from 'react'

const ListBrands = () => {
  return (
    <>
      <div className="row bg-light">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <a href="" className="btn btn-sm btn-danger btn-list my-2">
              <span className="me-2">
              </span>
              + Add Brand
            </a>
          </div>
          <div className="w-100">
            <table className="table table-borderd text-center">
              <thead>
                <tr className="table-secondary">
                  <th>Id</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table">
                  <td>Id</td>
                  <td>Name</td>
                  <td>Subject</td>
                  <td>Age</td>
                  <td>Actions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListBrands