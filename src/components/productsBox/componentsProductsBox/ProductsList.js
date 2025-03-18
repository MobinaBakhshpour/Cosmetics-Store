import React from 'react'
import { Alert } from 'react-bootstrap'
import './ProductsList.css'

export default function ProductsList({ products }) {
  return (
    products.length === 0 ? (
      <Alert variant="danger" className='text-center showError'>
        محصولی در این دسته بندی وجود ندارد.
      </Alert>
    ) : (
      <div className="row">
        {products.map(product => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
            <div className="product-grid">
              <div className="product-image">
                <a href="#" className="image">
                  <img src={product.image} alt={product.name} />
                </a>
                <span className="product-discount-label">-23%</span>
                <ul className="product-links">
                  <li><a href="#"><i className="fa fa-search"></i></a></li>
                  <li><a href="#"><i className="fa fa-heart"></i></a></li>
                  <li><a href="#"><i className="fa fa-random"></i></a></li>
                </ul>
                <a href="#" className="add-to-cart">Add to Cart</a>
              </div>
              <div className="product-content">
                <h3 className="title"><a href="#">{product.name}</a></h3>
                <div className="price">$53.55 <span>$68.88</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
