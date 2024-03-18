import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Cart.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Cart = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  // Update product state when location state changes
  useEffect(() => {
    if (location.state && location.state.product) {
      setProduct(location.state.product);
    }
  }, [location.state]);

  if (!product) {
    return (
      <div>
        <Navbar />
        <h1>Cart Page</h1>
        <p>No product data found</p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
            <Navbar />
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Your Cart</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                <img src={product.image} className="w-100" alt="Blue Jeans Jacket" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            <p><strong>{product.name}</strong></p>
                                            <p> Transmission: {product.transmission}</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

                                            <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>

                                                <div className="form-outline">
                                                    <input id="form1" min="1" name="quantity" defaultValue="1" type="number" className="form-control" />
                                                    <label className="form-label" htmlFor="form1">Quantity</label>
                                                </div>

                                            </div>

                                            <p className="text-start text-md-center">
                                                <strong>Price: &#8377;{product.price}</strong>
                                            </p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>{product.name}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including GST)</p>
                                                </strong>
                                            </div>
                                            <span><strong>&#8377;{product.price}</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>  
            </section>
            <Link to="/buy"><button className='Buttoni'>Place Order</button></Link>
           <div className="foot" style={{marginTop:"125px"}}>
           <Footer/>
           </div>
        </div>
  );
};

export default Cart;

