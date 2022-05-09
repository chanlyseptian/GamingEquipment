import React from 'react'
import { Homepage, Brands, Members } from '../pages'
import { Routes, Route } from 'react-router-dom';

const MainContent = () => {
  return (
    <>
      <Routes>
        <Route path=""
          element={<Homepage />}>
        </Route>
        <Route path="members"
          element={<Members />}>
        </Route>
        <Route path="brands"
          element={<Brands />}>
        </Route>
      </Routes>
    </>
  )
}

export default MainContent