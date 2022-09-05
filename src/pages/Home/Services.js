import React from "react";
import background from "../../photoes/background/bg2.jpg";
import bg from "../../photoes/background/bg.jpg";
import eliphant from "../../photoes/banner/elephant.jpg";
import tree from "../../photoes/banner/tree.jpg";
import animal from "../../photoes/banner/animal.jpg";
import { BiPurchaseTag } from "react-icons/bi";

const Services = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      className="p-lg-5 p-3 "
    >
      <h1 className="text-center fw-bold fs-1 mt-5 p-4">Services</h1>
      <div class="row row-cols-1 row-cols-md-3 g-5 px-lg-5 mx-lg-3 pb-5 mb-5">
        <div class="col ">
          <div class="card shadow-lg border-0 h-100 ">
            <img src={animal} class="card-img-top h-75" alt="..." />
            <div class="card-body bg-secondary text-white">
              <h5 class="card-title text-center fw-bold">Alone Deer</h5>
              <p class="card-text">
                <small>
                  This is too rare to pick a single photo of a deer because they
                  always stay with their team.I clicked it with passionatly and
                  make it hilarious.
                </small>
              </p>
              <p className="my-1 fw-bold">Price: 15$</p>
            </div>
            <div class="card-footer p-0 border-0">
              <button class="btn rounded-0 rounded-bottom w-100 fw-bold btn-dark">
                Purchage <BiPurchaseTag className="ms-2 fw-bold" />
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0 shadow-lg h-100">
            <img src={tree} class="card-img-top h-75" alt="..." />
            <div class="card-body bg-secondary text-white">
              <h5 class="card-title text-center fw-bold">Big Tree</h5>
              <p class="card-text">
                <small>
                  The photo of a single big tree will take your mind in peace.
                  No croud, no population only a single big tree, no one ther,
                  just you are there Imagine, just wow.
                </small>
              </p>
              <p className="my-1 fw-bold">Price: 12$</p>
            </div>
            <div class="border-0 p-0  card-footer">
              <button class="btn rounded-0 rounded-bottom w-100 btn-dark fw-bold">
                Purchage <BiPurchaseTag className="ms-2 fw-bold" />
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0 shadow-lg h-100">
            <img src={eliphant} class="card-img-top h-75" alt="..." />
            <div class="card-body bg-secondary text-white">
              <h5 class="card-title text-center fw-bold">Giant Eliphant</h5>
              <p class="card-text">
                <small>
                  A giant forest elephant is also dangerous like a shepard. They
                  are also stay with their team or family, so it is dificult to
                  pick a single photo of him.
                </small>
              </p>
              <p className="my-1 fw-bold">Price: 10$</p>
            </div>
            <div class="border-0 p-0 card-footer">
              <button class="btn rounded-0 rounded-bottom w-100 fw-bold btn-dark">
                Purchage <BiPurchaseTag className="ms-2 fw-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
