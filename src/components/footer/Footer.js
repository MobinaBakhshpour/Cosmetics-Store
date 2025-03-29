import React from 'react'
import './Footer.css'
import LeftSection from './componentsFooter/LeftSection'
import RightSection from './componentsFooter/RightSection'

export default function Footer() {
  return (
    <div className='footer-container'>
      <RightSection />
      <LeftSection />
    </div>
  )
}
