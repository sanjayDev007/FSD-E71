import React, { useState } from 'react';

function Navbar(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('name');
    console.log("Navbar Component Rendered")
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        // Pass searchTerm to parent or handle search logic here
        const filteredProducts = props.products.filter(product =>
            product.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        props.setProducts(filteredProducts);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        // Pass sortOption to parent or handle sort logic here
        let sortedProducts = [...props.products];
        if (e.target.value === 'name') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (e.target.value === 'price') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (e.target.value === 'rating') {
            sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        }
        props.setProducts(sortedProducts);
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>
            {console.log("Navbar JSX Rendered")}
            <div>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div>
                <label>Sort by: </label>
                <select value={sortOption} onChange={handleSortChange}>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
        </nav>
    );
}

export default Navbar;