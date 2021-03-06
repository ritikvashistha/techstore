import React from "react";
import { ProductConsumer } from "../../context";
import PayPalBtn from "./PayPalBtn";
export default function CartTotals({ history }) {
  return (
    <div className="row">
      <ProductConsumer>
        {(value) => {
          const { clearCart, carSubTotal, cartTax, cartTotal } = value;
          return (
            <div className="col text-title text-center my-4">
              <button
                className="btn btn-outline-danger text-capitalize mb-4"
                onClick={clearCart}
              >
                clear cart
              </button>
              <h3>sub total : ₹{carSubTotal}</h3>
              <h3>tax : ₹{cartTax}</h3>
              <h3>
                <strong>
                  total : <span className="text-danger">₹{cartTotal}</span>
                </strong>
              </h3>
              <p className="text-success">100% Safe & Secured Payments</p>
              <PayPalBtn
                history={history}
                cartTotal={cartTotal}
                clearCart={clearCart}
              />
            </div>
          );
        }}
      </ProductConsumer>
    </div>
  );
}
