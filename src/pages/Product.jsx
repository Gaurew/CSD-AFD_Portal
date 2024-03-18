import React, { useState } from 'react';
import '../components/NewProduct/NewProduct.css'
import vehicleData from  '../Assets/Car'
import Item from '../components/Item/Item';
import Navbar from '../components/Navbar/Navbar';
import './Product.css'
import './Desktop.css'
const Product = () => {
  
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

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
    <div className="div-31">
          Copyrights © CSD India 2020. All Rights Reserved.&nbsp;&nbsp;&nbsp;
          <a
            href="https://csdindia.gov.in/privacypolicy.html"
            className="footer-link"
            target="_blank"
            style={{textDecoration: 'none', color: 'inherit' }}
          >
            Privacy Policy&nbsp;&nbsp;&nbsp;
          </a>
           
          <a
            style={{textDecoration: 'none', color: 'inherit' }}
            href="https://csdindia.gov.in/disclaimer.html"
            className="footer-link"
            
          >
            &nbsp;Disclaimer&nbsp;&nbsp;&nbsp;
          </a>
           
          <a
            href="https://csdindia.gov.in/faq.html"
            className="footer-link"
            target="_blank"
            style={{textDecoration: 'none', color: 'inherit' }}
          >
            FAQ&nbsp;&nbsp;&nbsp;
          </a>
           
          <a
            style={{textDecoration: 'none', color: 'inherit' }}
            href="https://csdindia.gov.in/feedback.aspx"
            className="footer-link"
            target="_blank"
          >
            Feedback&nbsp;&nbsp;&nbsp;
          </a>
        </div>
    </div>
  );
};

export default Product;
