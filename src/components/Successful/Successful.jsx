import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import vehicleData from '../../Assets/Car';
import Breadcrumb from '../Breadcrum/Breadcrumb';
import Footer from '../Footer/Footer';

const PaymentComponent = () => {

    return (
        <div>
            <Navbar />
            <div className="container1 mt-5 px-5">
                <div className="mb-4">
                    <h2>Confirm order and pay</h2>
                    <span>Please make the payment, after that you can enjoy all the features and benefits.</span>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card p-3">
                            <h6 className="text-uppercase">Payment details</h6>
                            <div className="inputbox mt-3">
                                <span>Name on card</span>
                                <br />
                                <br />
                                <input type="text" name="name" className="form-control" required="required" />
                            </div>
                            {/* Remaining payment details */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inputbox mt-3 mr-2">
                                        <span>Card Number</span>
                                        <input type="text" name="name" className="form-control" required="required" />
                                        <i className="fa fa-credit-card"></i>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex flex-row">
                                        <div className="inputbox mt-3 mr-2">
                                            <span>Expiry</span>
                                            <input type="text" name="name" className="form-control" required="required" />
                                        </div>
                                        <div className="inputbox mt-3 mr-2">
                                            <span>CVV</span>
                                            <input type="text" name="name" className="form-control" required="required" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <h6 className="text-uppercase">Billing Address</h6>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <span>Street Address</span>
                                            <input type="text" name="name" className="form-control" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <span>City</span>
                                            <input type="text" name="name" className="form-control" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <span>State/Province</span>
                                            <input type="text" name="name" className="form-control" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2">
                                            <span>Zip code</span>
                                            <input type="text" name="name" className="form-control" required="required" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-4 mb-4 d-flex justify-content-between">
                            <span>Previous step</span>
                            <button className="btn btn-success px-3" >Pay </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PaymentComponent;
