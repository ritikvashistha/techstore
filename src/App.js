import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";
import CartPage from "./pages/CartPage";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
import { ProductConsumer } from "./context";
class App extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { manageSides } = value;

          return (
            <>
              {/* navbar ,sidebar,cart,footer */}
              <Navbar />
              <Sidebar />
              <SideCart />

              <div onClick={manageSides}>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/products" exact component={Products} />
                  <Route path="/products/:id" component={SingleProduct} />
                  <Route path="/cart" exact component={CartPage} />
                  <Route component={Default} />
                </Switch>
              </div>

              <Footer />
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}
export default App;
