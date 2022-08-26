import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Pages/Login'

import Sign from '../Pages/Sign'
import Support from '../Support/Support'
import Usecase from '../usecase/Usecase'
import Works from '../works/Works'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
            <Route path="/works" element={<Works/>}></Route>
            <Route path='/usecase' element={<Usecase/>}></Route>
            <Route path='/sign' element={<Sign/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path='/support' element={<Support/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes