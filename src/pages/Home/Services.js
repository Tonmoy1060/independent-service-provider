import React from "react";

import { BiPurchaseTag } from "react-icons/bi";
import { Link } from "react-router-dom";

const Services = ({service}) => {
  return (
    <div class="col ">
          <div class="card shadow-lg border-0 h-100 ">
            <img src={service.img} class="card-img-top h-75" alt="..." />
            <div class="card-body bg-secondary text-white">
              <h5 class="card-title text-center fw-bold">{service.name}</h5>
              <p class="card-text">
                <small>
                  {service.description}
                </small>
              </p>
              <p className="my-1 fw-bold">Price: {service.price}</p>
            </div>
            <div class="card-footer p-0 border-0">
              <Link to={`/purchase/${service.name}`}><button class="btn rounded-0 rounded-bottom w-100 fw-bold btn-dark">
                Purchage <BiPurchaseTag className="ms-2 fw-bold" />
              </button></Link>
            </div>
          </div>
        </div>
  );
};

export default Services;
