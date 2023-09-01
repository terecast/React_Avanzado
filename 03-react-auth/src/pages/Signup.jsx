import logo from '@/assets/react.svg'
import '@/styles/form.css'
import { useState } from 'react'
import axios from 'Axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const sendData = async (data) => {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ecommerce-json-jwt.onrender.com/register',
      headers: {
        'Content-Type': 'application/json'

      },
      data: {
        first_name: data.firstName,
        last_name: data.lastName,
        gender: data.gender,
        email: data.email,
        password: data.password

      }
    }

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))
        navigate('/login')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    sendData({ firstName, lastName, gender, email, password })
  }
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='React' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='firstName'
            onChange={(event) => setFirstName(event.target.value)}
            placeholder='John'
          />
          <label htmlFor='firstName'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='lastName'
            name='lastName'
            onChange={(event) => setLastName(event.target.value)}
            placeholder='Doe'
          />
          <label htmlFor='lastName'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            onChange={(event) => setGender(event.target.value)}
            placeholder='Doe'
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            onChange={(event) => setEmail(event.target.value)}
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            onChange={(event) => setPassword(event.target.value)}
            placeholder='password'
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>
  )
}

export default Signup
