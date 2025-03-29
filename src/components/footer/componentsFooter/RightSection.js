import React from 'react'
import './RightSection.css'

export default function RightSection() {
  return (
    <div className='rightSection-container'>
      <img src="/imgs/logo.png" alt="logo" />
      <div className="description"> با مبینا استور ، لحظات خاص خود را بی نظیر و به یادماندنی کنید . </div>
      <div className='socialMedia-container'>
        <div className="message"> با ما همراه باشید :) </div>
        <div className="socialMedia">
          <div><svg width={46} height={46} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <path d="M17.5 6.5h.01" />
          </svg>MobinaStore</div>

          <div><svg width={46} height={46} fill="none" stroke="#3f9a86" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" />
          </svg>ThisIsMobinaStore</div>
        </div>
      </div>
    </div>
  )
}
