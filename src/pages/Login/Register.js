import React from "react";
import auth from "../../firebase.init";
import {
   useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
   const [passError , setPassError] = useState('');
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  let authError;

  if (error || gError) {
    authError = error?.message || gError?.message;
  }

  const handleLogInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const rePassword = e.target.rePassword.value;
    if (password !== rePassword){
      setPassError('Two password are not same');
    }
    createUserWithEmailAndPassword(email, password);
    e.target.reset();
  };
   return (
      <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
      <div className="pb-4 m-2 shadow-lg p-4 rounded-4  ">
        <h4 className="text-center fw-bold  px-5 mx-4">Registration</h4>
        <form onSubmit={handleLogInForm} className="p-1">
          <div class="mb-2 ">
            <label for="exampleInputEmail1" class="form-label ">
              <small>Email address</small>
            </label>
            <input
              type="email"
              name="email"
              class="form-control "
              id="exampleInputEmail1"
              placeholder="Your Email"
              aria-describedby="emailHelp"
              required
            />
            {/* <div id="emailHelp" class="form-text">
              {authError}
            </div> */}
          </div>
          <div class="mb-2 ">
            <label for="exampleInputEmail1" class="form-label">
              <small>Password</small>
            </label>
            <input
            
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div class="mb-2 ">
            <label for="exampleInputEmail1" class="form-label">
              <small>Retype-Password</small>
            </label>
            <input
              type="Password"
              name="rePassword"
              class="form-control"
              placeholder="Retype Password"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div class="mb-3 form-check m-0 p-0">
            <div id="emailHelp" class="form-text m-0 p-0">
              <small class=" text-danger">{passError}</small>
              <p>
                <small>
                  Alredy Registered?{" "}
                  <Link className="text-decoration-none" to={"/login"}>
                    Please Login
                  </Link>
                </small>
              </p>
            </div>
          </div>
          <button type="submit" class="btn btn-dark w-100">
            Registration
          </button>
        </form>
        <div className="d-flex align-items-center py-1">
          <div className="hr w-50 bg-dark mx-3" style={{ height: "1px" }}></div>
          <div>
            <p className="pt-2">or</p>
          </div>
          <div className="hr w-50 bg-dark mx-3" style={{ height: "1px" }}></div>
        </div>
        <button
          onClick={() => signInWithGoogle()}
          type="submit"
          class="btn btn-secondary w-100"
        >
          Google <FcGoogle className="ms-2"></FcGoogle>
        </button>
      </div>
    </div>
   );
};

export default Register;