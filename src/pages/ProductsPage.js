import React from "react";
import Products from "../components/Productspage/Products";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpg";
export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
      <h1>Hello From Products Page</h1>
    </>
  );
}
