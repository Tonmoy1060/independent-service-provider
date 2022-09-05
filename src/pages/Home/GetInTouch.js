import React from "react";
import image from "../../photoes/background/background.jpg";
import bg from "../../photoes/background/bg.jpg";

const GetInTouch = () => {
  return (
    <div className="p-5" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
    }} bg="dark" variant="dark">
    <div className="w-75 mx-auto p-5" >
      <div class="card border-0" >
        <div class="row g-0 shadow-lg" >
          <div class="col-md-6">
            <div class="card bg-dark text-white">
              <img src={image} class="img-fluid rounded-start " alt="..." />
              <div class="card-img-overlay p-lg-5 d-flex h-100  justify-content-center align-items-center">
                <div>
                <h5 class="card-title pb-3">Get in touch <br></br> With your Email</h5>
                <p class="card-text">
                  It will help me to connect with you too easily.
                </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-body ps-5  d-flex h-100  justify-content-center align-items-center"  >
              <div>
              <h5 class="card-title ">Your Email</h5>
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GetInTouch;
