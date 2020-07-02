import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="aboutbcg"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="About us" center />
            <p className={"text-lead text-muted my-3"}>
              Welcome to [store name], your number one source for all things
              [product, ie: shoes, bags, dog treats]. We're ded icated to giving
              you the very best of [product], with a focus on [three
              characteristics, ie: dependability, customer service and
              uniqueness.] Founded in [year] by [founder's name]
            </p>

            <p className={"text-lead text-muted my-3"}>
              Welcome to [store name], your number one source for all things
              [product, ie: shoes, bags, dog treats]. We're ded icated to giving
              you the very best of [product], with a focus on [three
              characteristics, ie: dependability, customer service and
              uniqueness.] Founded in [year] by [founder's name]
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
