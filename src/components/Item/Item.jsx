import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Item = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-img-container">
      <Link to={`/product/${props.id}`}><img src={props.image} className="card-img-top" alt="Card" /></Link>
      </div>
      <div className="card-header">
        <h5>{props.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><h6>Price: &#8377;{props.price}</h6></li>
        
      </ul>
    </div>
  );
};

export default Item;
