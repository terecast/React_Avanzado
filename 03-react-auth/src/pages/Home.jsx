import ProductList from './ProductList'
import '@/styles/home.css'

import { useState, useEffect } from 'react'
import { useAdminContext } from '../hooks/useAdmin'

const Home = () => {
  const { itemFilter, setItemFilter, setFilterOrig } = useAdminContext()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      fetch('https://ecommerce-json-jwt.onrender.com/items/')
        .then((response) => response.json())
        .then((data) => {
          setFilterOrig(data)
          setItemFilter(data)
          setLoading(false)
        })
    }
  }, [])

  return (

    <div className='container'>
      <div className='row'>
        {itemFilter.map((item, index) => (
          <ProductList key={index} imageVal={item.image} nombre={item.product_name} marca={item.brand} precio={item.price} id={item.id} />
        )
        )}
      </div>
    </div>

  )
}

export default Home
