import React from 'react'
import './LeftSection.css'

export default function LeftSection() {
  return (
    <div className='containerLeft'>
      <div className='leftSection-container'>
        <div className="rightSection-footer">
          <ul className='footerMenu-right'>
            <li className='footerMenu-right-title'> دسترسی سریع </li>
            <li><a href="#"> صفحه اصلی </a></li>
            <li><a href="#"> وبلاگ </a></li>
            <li><a href="#"> درباره ما </a></li>
            <li><a href="#"> تخفیفات </a></li>
          </ul>
        </div>
        <div className="leftSection-footer">
          <ul className='footerMenu-right'>
            <li className='footerMenu-right-title'> اطلاعات تماس </li>
            <li><a href="#"> آدرس دفتر مرکزی : تهران،الهیه </a></li>
            <li><a href="#"> ادرس انبار مرکزی : تهران ، کارگر شمالی </a></li>
            <li><a href="#"> تلفن : 021-12345678 </a></li>
            <li><a href="#"> کد پستی : 123456 </a></li>
          </ul>
        </div>
        <div className="certificatSection">
          <div className="move"><a href="#header"> بازگشت به بالا   <svg width={46} height={46} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m18 15-6-6-6 6" /></svg>
          </a>
          </div>
          <div className="certificat">
            <img src="/imgs/enamad.png" alt="نماد اعتماد الکترونیک" className="enamad" />
            <img src="/imgs/zarinpal.png" alt="زرین پال" className="zarrinPal" />
          </div>

        </div>
      </div>
      <div className="own"> کلیه حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی مبینا می باشد. </div>
    </div>
  )
}
