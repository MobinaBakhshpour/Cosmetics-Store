import React, { useContext } from 'react'
import './ProductsSlidebar.css'
import { contextData } from '../contextData/ContextData'
import { Link } from 'react-router-dom'

export default function ProductsSlidebar() {
    const contextValue = useContext(contextData)

    let totalProducts = contextValue.newProductCart.reduce((total, product) => total + product.count, 0)

    return (
        <div className={`ProductsSlidebar ${contextValue.isShowSlidebarProduct ? 'd-block' : 'd-none'}`}>
            <div className="ProductsSlidebar-close" onClick={() => contextValue.setIsShowSlidebarProduct(false)}><svg width={35} height={35} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></div>
            <div className="ProductsSlidebar-title"> سبد خرید <span className='ProductsSlidebar-count'>{totalProducts}</span> </div>
            <div className="row">
                <div className="col-12 d-flex flex-row align-items-center justify-content-evenly details-containor productsSlidebar-header">
                    <h5></h5>
                    <h5> نام محصول </h5>
                    <h5> تعداد </h5>
                    <h5> قیمت </h5>
                    <h5></h5>
                </div>
            </div>
            {contextValue.newProductCart.map(product => (
                <div className="row" key={product.id}>
                    <div className="col-12 d-flex flex-row align-items-center justify-content-around details-containor">
                        <img src={product.image} alt={product.name} />
                        <div className='ProductsSlidebar-productName'>{product.name}</div>
                        <div className='ProductsSlidebar-productCount'>{product.count}</div>
                        <div className='ProductsSlidebar-productPrice'>{product.price}</div>
                        <div className='ProductsSlidebar-productShow' onClick={() => contextValue.setIsShowSlidebarProduct(false)}><Link to={`/product/${product.productId}`}> مشاهده </Link></div>
                    </div>
                </div>
            ))}
        </div>

    )
}
