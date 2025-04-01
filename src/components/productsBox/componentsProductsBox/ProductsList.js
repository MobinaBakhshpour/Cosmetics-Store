import React from 'react'
import { Alert } from 'react-bootstrap'
import './ProductsList.css'
import { Link } from 'react-router-dom';

export default function ProductsList({ products }) {
  return (
    products.length === 0 ? (
      <Alert variant="danger" className='text-center showError'>
        محصولی در این دسته بندی وجود ندارد.
      </Alert>
    ) : (
      <div className="row container-productCard">
        {products.map(product => (
          <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="product-grid">
                <div className="product-image">
                  <a href="#" className="image">
                    <img src={product.image} alt={product.name} />
                  </a>
                  <ul className="product-links">
                    <li><a href="#">
                      <img src="imgs/eye.png" alt="more..." />
                    </a></li>
                  </ul>
                  <a href="#" className="add-to-cart"> خرید </a>
                </div>
                <div className="product-content">
                  <h3 className="title"><a href="#">{product.name}</a></h3>
                  <div className="price">{product.price} <span>تومان</span></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    )
  );
}
