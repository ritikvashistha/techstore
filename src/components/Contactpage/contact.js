import React from "react";
import Title from "../Title";

export default function contact() {
  return (
    <section className="py-5">
      <div className="row container">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Contacts" />

          <form className="mt-5">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="john smith"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email@email.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="important!!!"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Hello there budddy"
              ></textarea>
            </div>
            {/* submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Submit"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
