import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './data'
import './SingleProductPage.css'

export default function SingleProductPage() {
    let params = useParams();
    let product = data.find(product => product.id == params.productId)

    let [productCount, setProductCount] = useState(1);
    let minusCount = () => {
        productCount != 1 ? setProductCount(prevCount => prevCount - 1) : setProductCount(1);
    }
    let addCount = () => {
        setProductCount(prevCount => prevCount + 1);
    }

    return (
        <>
            {product &&
                <div className='singleProductPage '>
                    <div className='description-product'>
                        <h2 className="title-product">{product.name}</h2>
                        <h4 className="price-product">{product.price} تومان</h4>
                        <div className="description-product">
                            <div className="descriptionTitle">
                                <svg width={30} height={30} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
                                </svg><span>توضیحات</span>
                            </div>
                            <div className="description">{product.description}</div>
                            <div className="deliver">
                                <div className="deliverTitle">
                                    <svg width={30} height={30} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" /><path d="M5.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z" /><path d="M18.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z" />
                                    </svg><span>ارسال و بازگشت رایگان</span>
                                </div>
                                <div className="deliverDescription">سفارش‌های بالای 500 هزار تومان را به صورت رایگان دریافت کنید.</div>
                            </div>
                        </div>
                    </div>
                    <div className='showImage-product'><img src={`${product.image}`} alt="" /></div>
                    <div className='details-product'>
                        <ul className="detailList">
                            <li><svg width={30} height={30} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg><span>ارسال فوری در تهران و کرج</span></li>
                            <li><svg width={30} height={30} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg><span>گارانتی اصالت کالا</span></li>
                            <li><svg width={30} height={30} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg><span>ارسال از 1 روز کاری</span></li>
                        </ul>
                        <div className="productCounter"><svg onClick={addCount} width={30} height={30} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14" /><path d="M5 12h14" /></svg> {productCount} <svg onClick={minusCount} width={30} height={30} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" /></svg></div>
                        <button className='addToCard'>افزودن به سبد خرید</button>
                        <div className="giveTime">
                            <div className="giveTimeTitle"> نیاز به زمان دارید؟ </div>
                            <div className="giveTimeDescription"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است  </div>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}
