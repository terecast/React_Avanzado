import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Secret from './pages/Secret'
import Header from '@/components/Header/Header'

function App () {
  return (
    <>
      <Header />
      <Home />
      <Dashboard />
      <Login />
      <Signup />
      <Secret />
    </>
  )
}

export default App
