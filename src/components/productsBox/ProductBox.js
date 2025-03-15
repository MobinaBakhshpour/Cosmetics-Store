import React, { useState } from "react";
import data from "./data"
import FiltersBox from "./componentsProductsBox/FiltersBox"
import ProductsList from "./componentsProductsBox/ProductsList";

export default function ProductBox() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    let products = selectedCategory === "همه" ? data : data.filter(product => product.category === selectedCategory)

    return (
        <>
            <FiltersBox  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <ProductsList products={products} />
        </>
    )
}