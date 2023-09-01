import '@/styles/productList.css'
import { Link } from 'react-router-dom'

const ProductList = (product) => {
  return (
    <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
      <div className='card'>
        <img className='card-img' src={product.imageVal} alt='Vans' />

        <div className='card-body'>
          <h4 className='card-title'>
            <Link to={`/productdetail?id=${product.id}`}>
              {product.nombre}
            </Link>
          </h4>
          <h6 className='card-subtitle mb-2 text-muted'> {product.marca}</h6>

          <div className='buy d-flex justify-content-between align-items-center'>
            <div className='price text-success'><h5 className='mt-4'> {product.precio}</h5></div>
            <a href='#' className='btn btn-danger mt-3'><i className='fas fa-shopping-cart' /> Add to Cart</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductList
