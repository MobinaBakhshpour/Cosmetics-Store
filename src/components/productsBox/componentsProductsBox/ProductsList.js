import React from 'react'
import ProductCard from './ProductCard'
import {Alert} from 'react-bootstrap';
export default function ProductsList({ products }) {
  return (

    <>
      {products.length > 0 ? (
        <Alert variant="danger"> محصولی برای این دسته یافت نشد! </Alert>
      ) : (
        products.map(product => <ProductCard key={product.id} product={product} />)
      )}
    </>


  )
}
