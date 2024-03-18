import React, { useState } from 'react';
import './NewProduct.css';
import vehicleData from '../../Assets/Vehicle';
import Item from '../Item/Item';
const NewPros = () => {
  
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');


  const filteredData = vehicleData.filter(item => {
    return (
      (selectedColor === '' || item.color.includes(selectedColor)) &&
      (selectedPriceRange === '' || item.price <= selectedPriceRange)
    );
  });

  return (
    <div className='new'>
      <div className="filters-container">
        
        <div className="color-filter">
          <h4>Color Filter:</h4>
          <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
            <option value="">All Colors</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
            
          </select>
        </div>

        
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
        {filteredData.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} transmission={item.transmission} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default NewPros;
