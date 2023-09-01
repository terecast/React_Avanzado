import { Routes, Route, Navigate } from 'react-router-dom'
import { useAdminContext } from '@/hooks/useAdmin'
import Home from '@/pages/Home'

import Login from '@/pages/Login'
import Secret from '@/pages/Secret'
import Signup from '@/pages/Signup'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'

const RoutesIndex = () => {
  const { isAdmin } = useAdminContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/login' element={<Login />} />
      <Route
        path='/secret' element={
        isAdmin
          ? <Secret />
          : <Navigate to='/' />
        }
      />
      <Route path='/productdetail' element={<ProductDetail />} />
      <Route path='/productlist' element={<ProductList />} />
      <Route path='/signup' element={<Signup />} />

    </Routes>
  )
}

export default RoutesIndex
