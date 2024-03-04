// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Desktop from "./pages/Desktop";
import LoginSignup from "./pages/LoginSignup";
import Inventory from "./pages/Inventory";
import Product from "./pages/Product";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router> 
      <div className="App">
        <Switch> 
          <Route exact path="/" component={Desktop} />
          <Route path="/login" component={LoginSignup} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/newpro" component={Inventory} />
          <Route path="/product/:id" component={ProductDisplay} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
