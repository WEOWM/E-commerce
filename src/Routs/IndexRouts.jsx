import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import Home from '../pages/Home/Home'

const IndexRouts = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<ProductDetail/>}/>
        </Routes>
    </div>
  )
}

export default IndexRouts