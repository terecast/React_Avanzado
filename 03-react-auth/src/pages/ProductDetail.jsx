import React, { useState, useEffect } from 'react'
import '@/styles/productDetail.css'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
  const location = useLocation()

  const product = new URLSearchParams(location.search)

  const [loading, setLoading] = useState(true)
  const [itemData, setItemData] = useState([])

  useEffect(() => {
    if (loading) {
      const headers = { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVjZjkwM2RmLTlhYjEtNDg1NS1iOTk5LWI1YjNkOTk1NGQ4MSIsInJvbGUiOiJDVVNUT01FUiIsImlhdCI6MTY5MzM2OTQwM30.XoBPtfEoNcki2i7GtGhh2NYtY6kGV__jUs9Fuw55JFA' }
      fetch(`https://ecommerce-json-jwt.onrender.com/items/${product.get('id')}`, { headers })
        .then((response) => response.json())
        .then((data) => {
          setItemData(data)
          setLoading(false)
        })
    }
  }, [])

  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col item-photo'>
            <img className='imgStyle' src={itemData.image} alt='' />
          </div>
          <div className='col detailedDivStyle'>

            <h3> {itemData.product_name}</h3>
            <h5>Brand: {itemData.brand} <small>Cat: {itemData.category}</small></h5>

            <h6 className='title-price'><small>PRICE</small></h6>
            <h3>$  {itemData.price}</h3>

            <div className='section'>
              <p>
                <small>
                  {itemData.description}
                </small>
              </p>
            </div>

            <div className='section'>
              <button className='btn btn-success'><span className='glyphicon glyphicon-shopping-cart' aria-hidden='true' /> COMPRAR</button>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ProductDetail
