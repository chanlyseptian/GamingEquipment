import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {
  Homepage, ListItems, AddItem, EditItem,
  Brands, ListBrands, AddBrand, EditBrand,
  Members, AddMember, ListMembers, EditMember
} from '../pages'

const MainContent = () => {
  return (
    <>
      <Routes>
        {/* Items */}
        <Route path=""element={<Homepage />}>
          <Route path="/" element={<ListItems />}></Route>
          <Route path="items/create" element={<AddItem />}></Route>
          <Route path="items/edit" >
            <Route path=":id" element={<EditItem />}></Route>
          </Route>
        </Route>

        {/* Members */}
        <Route path="members" element={<Members />}>
          <Route path="" element={<ListMembers />}></Route>
          <Route path="create" element={<AddMember />}></Route>
          <Route path="edit" >
            <Route path=":id" element={<EditMember />}></Route>
          </Route>
        </Route>

        {/* Brands */}
        <Route path="brands" element={<Brands />}>
          <Route path="" element={<ListBrands />}></Route>
          <Route path="create" element={<AddBrand />}></Route>
          <Route path="edit" >
            <Route path=":id" element={<EditBrand />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default MainContent