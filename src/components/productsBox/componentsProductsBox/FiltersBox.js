import React from 'react'
import FilterItem from './FilterItem'
import './FiltersBox.css'

export default function FiltersBox({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { id: 0, name: "همه", icon: "/imgs/all.png" },
    { id: 4, name: "درمانی", icon: "/imgs/remedial.png" },
    { id: 1, name: "زیبایی", icon: "/imgs/beauty.png" },
    { id: 3, name: "کودک", icon: "/imgs/child.png" },
    { id: 2, name: "بهداشتی", icon: "/imgs/sanitary.png" }]
  return (
    <div className='filtersBox'>

      {categories.map(category => (
        < FilterItem key={category.id} name={category.name} icon={category.icon} setSelectedCategory={setSelectedCategory} isActive={category.name === selectedCategory}  />
      ))
      }

    </div>
  )
}
