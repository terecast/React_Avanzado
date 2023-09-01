import { createContext, useState } from 'react'
import jwtDecode from 'jwt-decode'

// #1 Crear el contexto

const AdminContext = createContext()

// #2 Crear el proveedor del contexto

const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [itemFilter, setItemFilter] = useState([])
  const [filterOrig, setFilterOrig] = useState([])

  const login = (token) => {
    const decoded = jwtDecode(token)
    const admin = decoded.role === 'ADMIN'
    setIsAdmin(admin)
    setIsLoggedIn(true)
    return admin
  }

  const logout = () => {
    localStorage.removeItem('jwt_token')
    setIsAdmin(false)
  }

  return (
    <AdminContext.Provider value={{ isAdmin, isLoggedIn, itemFilter, setItemFilter, filterOrig, setFilterOrig, login, logout }}>
      {children}
    </AdminContext.Provider>
  )
}

export {
  AdminContext,
  AdminProvider
}
