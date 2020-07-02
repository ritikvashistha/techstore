import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Homepage/Services";
import Featured from "../components/Homepage/FeaturedProduct";

export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link className="main-link" style={{ margin: "2rem" }} to="/products">
          {" "}
          Our Products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
