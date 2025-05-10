import React from 'react'
import './FilterItem.css'

export default function FilterItem({ name, icon, setSelectedCategory, isActive }) {
    return (
        <div className='filterItem-container'>
            <div className={`filterItem ${isActive ? "activeFilter" : ""}`} onClick={() => setSelectedCategory(name)} >{icon}</div>
            <div className="filterItem-name">{name}</div>
        </div>
    )
}
