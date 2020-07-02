import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";

export default function Default() {
  return (
    <>
      <Hero img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase">Page not found</h2>
        <Link className="main-link" style={{ margin: "2rem" }} to="/">
          {" "}
          Home
        </Link>
      </Hero>
    </>
  );
}
