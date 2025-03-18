import React from 'react'
import './FilterItem.css'

export default function FilterItem({ name, icon, setSelectedCategory, isActive }) {
    return (
        <>
            <div className={`filterItem ${isActive ? "activeFilter" : ""}`} onClick={() => setSelectedCategory(name)} ><img className='filterIcon' src={icon} alt={name} />{name}</div>
        </>
    )
}
