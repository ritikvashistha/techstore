import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";

import CartSection from "../components/CartPage";
export default function CartPage() {
  return (
    <>
      <Hero img={cartBcg} />
      <h1>Hello From Cart Page</h1>
      <CartSection />
    </>
  );
}
