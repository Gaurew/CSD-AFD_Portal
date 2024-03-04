import React, { useState } from 'react';
import '../components/NewProduct/NewProduct.css'
import vehicleData from  '../Assets/Car'
import Item from '../components/Item/Item';
import Navbar from '../components/Navbar/Navbar';
import './Product.css'
const Product = () => {
  // State variables for color and price range selection
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Filtered vehicle data based on color and price range
  const filteredData = vehicleData.filter(item => {
    return (
      (selectedColor === '' || item.color.includes(selectedColor)) &&
      (selectedPriceRange === '' || item.price <= selectedPriceRange)
    );
  });

  return (
    <div>
      <Navbar/>
      <h3 className='text-center1'>Explore Our Wheels</h3>
      <div className='new'>
      <div className="filters-container">
        {/* Color selection filter */}
        <div className="color-filter">
          <h4>Color Filter:</h4>
          <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
            <option value="">All Colors</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
            {/* Add more color options as needed */}
          </select>
        </div>

        {/* Price selection filter */}
        <div className="price-filter">
          <h4>Price Filter:</h4>
          <select value={selectedPriceRange} onChange={e => setSelectedPriceRange(e.target.value)}>
            <option value="">All Prices</option>
            
            <option value="200000">Up to &#8377;2,00,000</option>
            <option value="500000">Up to &#8377;5,00,000</option>
            <option value="1000000">Up to &#8377;10,00,000</option>
            <option value="1500000">Up to &#8377;15,00,000</option>
          </select>
        </div>
      </div>

      <div className="collections">
        {/* Render filtered items */}
        {filteredData.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} transmission={item.transmission} color={item.color} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Product;
