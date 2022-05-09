import React from 'react'

const ListItems = () => {
  return (
    <>
      <div className="row bg-light">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <a href="" className="btn btn-sm btn-danger btn-list my-2">
              <span className="me-2">
              </span>
              + Add Equipment
            </a>
          </div>
          <div className="w-100">
            <table className="table table-borderd text-center">
              <thead>
                <tr className="table-secondary">
                  <th>Id</th>
                  <th>Equipment Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Member Name</th>
                  <th>Brand Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListItems