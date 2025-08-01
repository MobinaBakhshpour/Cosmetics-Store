import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'
import './ProductsList.css'
import { Link } from 'react-router-dom';
import { contextData } from '../../contextData/ContextData'

export default function ProductsList({ products }) {
  const contextValue = useContext(contextData)

  return (
    products.length === 0 ? (
      <Alert variant="danger" className='text-center showError'>
        محصولی در این دسته بندی وجود ندارد.
      </Alert>
    ) : (
      <div className="row container-productCard">
        {products.map(product => (
          <div className="col-lg-3 col-sm-6 col-12" key={product.id}>
            <div className="product-grid">
              <div className="product-image">
                <Link to={`/product/${product.id}`} className="image">
                  <img src={product.image} alt={product.name} />
                </Link>
                <ul className="product-links">
                  <li><Link to={`/product/${product.id}`}>
                    <img src="imgs/eye.png" alt="more..." />
                  </Link></li>
                </ul>
                <Link className="add-to-cart" onClick={() => {
                  contextValue.setIsShowToast(true)
                  setTimeout(() => {
                    contextValue.setIsShowToast(false)
                  }, 2000);

                  let isInProductCart = contextValue.newProductCart.some(productCart => productCart.name === product.name)
                  if (!isInProductCart) {
                    let newProductCartUser = {
                      id: contextValue.newProductCart.length + 1,
                      productId: product.id,
                      name: product.name,
                      price: product.price.toLocaleString(),
                      count: 1,
                      image: product.image,
                    }
                    contextValue.setNewProductCart((prevValue) => [...prevValue, newProductCartUser]);
                  } else {
                    let productsCart = [...contextValue.newProductCart];
                    productsCart.forEach(productCart => {
                      if (productCart.name === product.name) {
                        productCart.count += 1;
                      }
                    })
                  }

                }}> خرید </Link>
              </div>
              <div className="product-content">
                <h3 className="title"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                <div className="price">{product.price?.toLocaleString()} <span>تومان</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
