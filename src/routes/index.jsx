import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, Pdp, Personal} from '../pages'

const RoutesWrapper = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pdp/:id' element={<Pdp/>} />
            <Route path='/personal' element={<Personal/>} />
        </Routes>
    </div>
  )
}

export default RoutesWrapper