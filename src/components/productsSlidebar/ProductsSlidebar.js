import React from 'react'
import './ProductsSlidebar.css'

export default function ProductsSlidebar() {
    return (
        <div className='ProductsSlidebar'>
            <div className="ProductsSlidebar-close"><svg width={35} height={35} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></div>
            <div className="ProductsSlidebar-title"> سبد خرید <span className='ProductsSlidebar-count'>0</span> </div>
            <div className="row">
                <div className="col-12 d-flex flex-row align-items-center justify-content-between details-containor">
                    <img src="./imgs/cup.jpg" alt="" />
                    <h6>عنوان</h6>
                    <h6>قیمت</h6>
                    <h6 className='ProductsSlidebar-productShow'>مشاهده</h6>
                </div>
            </div>
        </div>

    )
}
