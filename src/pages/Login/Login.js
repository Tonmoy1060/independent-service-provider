import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,useSendEmailVerification
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const Login = () => {
   const location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  let authError;

  if (error || gError ) {
    authError = error?.message || gError?.message;
  }

  if (loading || gLoading ) {
   return <Loading></Loading>
  }

  const handleLogInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
      signInWithEmailAndPassword(email, password);
    e.target.reset();
  };

  const from = location.state?.from?.pathname || "/";
  if (user || gUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
      <div className="pb-4 m-2 shadow-lg p-4 rounded-4  ">
        <h3 className="text-center fw-bold  px-5 mx-5">{" "}Login {" "}</h3>
        <form onSubmit={handleLogInForm} className="p-1">
          <div class="mb-3 ">
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
          <div class="mb-3 ">
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
          <div class="mb-3 form-check m-0 p-0">
            <div id="emailHelp" class="form-text m-0 p-0">
              <small class=" text-danger">{authError}</small>
              <p>
                <small>
                  New To site?{" "}
                  <Link className="text-decoration-none" to={"/register"}>
                    Please Register
                  </Link>
                </small>
              </p>
            </div>
          </div>
          <button type="submit" class="btn btn-dark w-100">
            Login
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

export default Login;
