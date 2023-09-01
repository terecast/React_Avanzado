import { NavLink } from 'react-router-dom'
import logo from '@/assets/logoTienda.avif'
import './header.scss'
import { useAdminContext } from '../../hooks/useAdmin'

const Header = () => {
  const { isAdmin, logout, isLoggedIn, filterOrig, setItemFilter } = useAdminContext()
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__link--is-active' : 'header__item-link'
  }
  const searchBar = (e) => {
    const value = e.target.value

    if (!value) {
      setItemFilter(filterOrig)
    } else {
      const filtered = filterOrig.filter((item) =>
        item.product_name.toLowerCase().includes(value.toLowerCase()))

      setItemFilter(filtered)
    }
  }
  return (
    <nav className='header'>

      <NavLink to='/' className='header__logo'>
        <img className='mb-4' src={logo} alt='' width='200' height='200' />

      </NavLink>

      <div className='search'>
        <form className='form-inline'>
          <div className='form-group mx-sm-3 mb-2'>
            <input onChange={searchBar} type='text' className='form-control' id='inputPassword2' placeholder='Search item' />
          </div>

        </form>
      </div>
      <ul className='header__nav-list'>

        <li className='header__list-item'>
          <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
        </li>

        <li className='header__list-item'>
          {
          isAdmin &&
            <NavLink to='/secret' className={({ isActive }) => linkIsActive(isActive)}>Secret</NavLink>
        }
        </li>

        <li className='header__list-item'>
          {
            !isLoggedIn &&
              <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>Login</NavLink>
          }
        </li>
        <li className='header__list-item'>
          {
            !isLoggedIn &&
              <NavLink to='/signup' className={({ isActive }) => linkIsActive(isActive)}>Signup</NavLink>
          }

        </li>
        <li className='header__list-item'>
          {
            isLoggedIn &&
              <NavLink to='/' onClick={logout}>Log Out</NavLink>
          }

        </li>
      </ul>
    </nav>

  )
}
export default Header
