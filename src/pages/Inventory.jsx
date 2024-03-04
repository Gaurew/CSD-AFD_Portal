import React from 'react'
import NewPros from '../components/NewProduct/NewPros'
import Navbar from '../components/Navbar/Navbar'
import './Inventory.css'
import Product from './Product'
const Inventory = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <h3 className="text-center">Explore The New Inventory</h3>
      <NewPros/>
      </div>
    </div>
  )
}

export default Inventory
