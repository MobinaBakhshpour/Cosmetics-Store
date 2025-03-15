import React from 'react'
import './FilterItem.css'

export default function FilterItem({ name, icon, setSelectedCategory }) {
    return (
        <>
            <div className="filterItem" onClick={() => setSelectedCategory(name)} ><img className='filterIcon' src={icon} alt={name} />{name}</div>
        </>
    )
}
