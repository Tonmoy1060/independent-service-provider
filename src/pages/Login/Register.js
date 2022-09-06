import React from "react";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle, useUpdateProfile
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../Shared/Loading";


const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [passError, setPassError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  

  let authError;

  if (error || gError || updateError) {
    authError = error?.message || gError?.message;
  }

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  const handleLogInForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const rePassword = e.target.rePassword.value;
    const name = e.target.name.value;
    if (password !== rePassword) {
      setPassError("Two password are not same");
    }
    
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name})
    
    e.target.reset();
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  const from = location.state?.from?.pathname || "/";
  if (user || gUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
      <div className="pb-4 m-2 shadow-lg p-4 rounded-4  ">
        <h4 className="text-center fw-bold  px-5 mx-4">Registration</h4>
        <form onSubmit={handleLogInForm} className="p-1">
          <div class="mb-3 ">
            {/* <label for="exampleInputEmail1" class="form-label ">
              <small>Email</small>
            </label> */}
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
          <div class="mb-3 ">
            {/* <label for="exampleInputEmail1" class="form-label">
              <small>Password</small>
            </label> */}
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div class="mb-3 ">
            <input
              type="Password"
              name="rePassword"
              class="form-control"
              placeholder="Retype Password"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div class="mb-3 ">
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Your Name"
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
