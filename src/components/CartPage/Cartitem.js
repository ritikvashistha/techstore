import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";
export default function Cartitem({
  CartItem,
  increment,
  decrement,
  removeItem,
}) {
  const { id, title, price, count, total, image } = CartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* image */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60" className="img-fluid" alt="product"></img>
      </div>
      {/* end of image */}
      {/* title */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      {/* end of title */}
      {/* price*/}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price : </span>₹ {price}
      </div>
      {/* end of price */}
      {/* count*/}
      <div className="col-10 mx-auto col-lg-2 pb-2 my-lg-0">
        <span className="d-lg-none">count : </span>
        <FaChevronCircleDown
          className="mx-2 text-primary cart-icon"
          onClick={() => decrement(id)}
        />
        {count}
        <FaChevronCircleUp
          className="mx-2 text-primary cart-icon"
          onClick={() => increment(id)}
        />{" "}
      </div>
      {/* end of count */}
      {/* delete*/}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">remove : </span>
        <FaTrash
          onClick={() => removeItem(id)}
          className="text-danger cart-icon"
        />{" "}
      </div>
      {/* end of delete */}
      {/* total*/}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">total : </span>item total : ₹ {total}{" "}
      </div>
      {/* end of delete */}
    </div>
  );
}
