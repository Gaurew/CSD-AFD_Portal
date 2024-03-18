import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import vehicleData from '../../Assets/Car';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDisplay.css';
import Breadcrumb from '../Breadcrum/Breadcrumb';
import Footer from '../Footer/Footer';

const ProductDisplay = () => {
  const { id } = useParams();
  const history = useHistory();
  const product = vehicleData.find(item => item.id === Number(id));

  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Update cart items state
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    console.log(updatedCartItems);
    // Redirect to cart page
    history.push({
      pathname: '/cart',
      state: { product: product }
    });
  };

  if (!product) {
    return (
      <div>
        <Navbar />
        Product not found
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Breadcrumb product={product}/>
      <div className="product-container">
        <h1 className='h3'></h1>
        <div className="productdisplay">
          <div className="productdisplay-left">
            <div className="productdisplay-img">
              <img src={product.image} className="img-thumbnail" alt={product.name} />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="productdisplay-right">
            <h2>{product.name}</h2>
          </div>
          <div className="productdisplay-right-prices">
            <br />
            <h4>Price: &#8377;{product.price}</h4>
            <br />
          </div>
          <div className="productdisplay-right-description">
            <dl className="row">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">{product.description}</dd>

              <dt className="col-sm-3">Transmission</dt>
              <dd className="col-sm-9">
                <p>{product.transmission}</p>
              </dd>
              <dt className="col-sm-3">Color</dt>
              <dd className="col-sm-9">{product.color}</dd>
            </dl>
          </div>
          <button className='btn-primary-btn-lg' onClick={() => addToCart(product)}>ADD TO CART</button>
        </div>
      </div>
     <Footer/>
    </div>
  );
};

export default ProductDisplay;
