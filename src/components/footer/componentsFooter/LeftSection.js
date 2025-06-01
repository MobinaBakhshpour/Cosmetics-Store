import React from 'react'
import './LeftSection.css'
import { Link } from 'react-router-dom'

export default function LeftSection() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className='containerLeft'>
      <div className='leftSection-container'>
        <div className="rightSection-footer">
          <ul className='footerMenu-right'>
            <li className='footerMenu-right-title'> دسترسی سریع </li>
            <li><Link to='/' > صفحه اصلی </Link></li>
            <li><Link to='' > وبلاگ </Link></li>
            <li><Link to='/aboutUs' > درباره ما </Link></li>
            <li><Link to='' > تخفیفات </Link></li>
          </ul>
        </div>
        <div className="leftSection-footer">
          <ul className='footerMenu-right'>
            <li className='footerMenu-right-title'> اطلاعات تماس </li>
            <li> آدرس دفتر مرکزی : تهران،الهیه </li>
            <li> ادرس انبار مرکزی : تهران ، کارگر شمالی </li>
            <li> تلفن : 021-12345678 </li>
            <li> کد پستی : 123456 </li>
          </ul>
        </div>
        <div className="certificatSection">
          <div className="move"><a onClick={scrollToTop}> بازگشت به بالا   <svg width={46} height={46} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
