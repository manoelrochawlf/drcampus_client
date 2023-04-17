import { Routes, Route } from 'react-router-dom'
import { RoutePath } from './types/routes'
import Home from './pages/Home'
import React from 'react'

const Router = () => {
 return (
  <Routes>
   <Route path={RoutePath.HOME} element={<Home />} />
  </Routes>
 )
}

export default Router