import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";


const Purchase = () => {
  const params = useParams({});
  console.log(params.name)
   
   const [user, loading, error] = useAuthState(auth);
   console.log(user);
   if(loading) {
      return <Loading></Loading>
   }
  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100 py-5 mb-5">
      <div>
        <h4 className="text-center fw-bold  px-5 m-4">Ordering For</h4>
        <div className="pb-5 m-2 shadow-lg p-4 rounded-4  ">
          <form className="p-1">
          <h4 className="text-center fw-bold text-white px-5 mx-4 py-0 my-0">Ordering For</h4>
            <div class="mb-2 ">
              <label for="exampleInputEmail1" class="form-label ">
                <small>Name</small>
              </label>
              <input
                type="text"
                name="name"
                class="form-control "
                id="exampleInputEmail1"
                value={user.displayName}
                aria-describedby="emailHelp"
                readOnly
                disabled
              />
              {/* <div id="emailHelp" class="form-text">
              {authError}
            </div> */}
            </div>
            <div class="mb-2 ">
              <label for="exampleInputEmail1" class="form-label">
                <small>Email</small>
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                value={user.email}
                id="exampleInputPassword1"
                required
                disabled
               
              />
            </div>
            <div class="pb-5 ">
              <label for="exampleInputEmail1" class="form-label">
                <small>Ordering For</small>
              </label>
              <input
                type="text"
                name="Product"
                class="form-control"
                value={params.name}
                id="exampleInputPassword1"
                disabled
                readOnly
              />
            </div>
            <button type="submit" class="btn btn-dark w-100 px-5 ">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
