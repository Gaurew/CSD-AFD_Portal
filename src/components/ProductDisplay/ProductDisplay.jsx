import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import vehicleData from '../../Assets/Car';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDisplay.css';

const ProductDisplay = () => {
  const { id } = useParams();
  const history = useHistory();
  const product = vehicleData.find(item => item.id === Number(id));

  const addToCart = (product) => {
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
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img">
            <img src={product.image} className="img-thumbnail" alt={product.name} />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
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
  );
};

export default ProductDisplay;
