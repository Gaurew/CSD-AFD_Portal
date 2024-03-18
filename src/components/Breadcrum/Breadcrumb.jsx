import React from 'react'
import './Breadcrum.css'
const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div className='breadcrum'>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active">Home</li>
          <li class="breadcrumb-item active">Inventory</li>
          <li class="breadcrumb-item active" aria-current="page">All Items</li>
          <li class="breadcrumb-item active"><b style={{color:'black'}}>{product.id}</b></li>
          <li class="breadcrumb-item active"><b style={{color:'black'}}>{product.name}</b></li>
        </ol>
      </nav>
    </div>

  )
}
export default Breadcrumb
