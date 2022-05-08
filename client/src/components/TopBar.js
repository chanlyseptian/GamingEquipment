import React from 'react'

const TopBar = () => {
  return (
    <>
      <div className="top-bar d-flex justify-content-center align-items-center">
        <a href="/">
          <img className="top-bar-img" src="https://raw.githubusercontent.com/chanlyseptian/GamingEquipment/main/client/src/assets/logo.png" alt="" />
        </a>
        <div>
          <h1 className="text-danger fw-bold display-2">
            Scarlet Gaming Community
          </h1>
          <h2 className="text-danger">
            Management System App for Member’s Gaming Equipment
          </h2>
        </div>
      </div>


    </>
  )
}

export default TopBar