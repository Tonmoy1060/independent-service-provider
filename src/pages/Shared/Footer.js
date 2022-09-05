import React from "react";
import footerBackground from "../../photoes/background/footer-2.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="text-white p-5 text-center"
      style={{
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className=" d-flex justify-content-evenly ">
        <div >
         <Link className="pt-2 fs-6 text-decoration-none text-white d-block" to={'/about'}><small>About Me</small></Link>
         <Link className="pt-2 fs-6 text-decoration-none text-white d-block" to={'/'}><small>Terms & Conditions</small></Link>
         <Link className="pt-2 fs-6 text-decoration-none text-white d-block" to={'/about'}><small>About Me</small></Link>
         <Link className="pt-2 fs-6 text-decoration-none text-white d-block" to={'/'}><small>Privacy Policy</small></Link>
        </div>
        <div class="d-flex " style={{ height: "100px" }}>
          <div class="vr "></div>
        </div>
        <div>
          <div className="d-flex fs-3">
          <a className="text-decoration-none text-white" href="https://www.facebook.com/"><FaFacebookSquare  className="me-4"></FaFacebookSquare></a>
          <a className="text-decoration-none text-white" href="https://github.com/Tonmoy1060"><BsGithub className="me-4"></BsGithub></a>
          <a className="text-decoration-none text-white" href="https://www.w3schools.com"><BsInstagram className="me-4"></BsInstagram></a>
            
            
          </div>
          <p className="pt-3">
            <small>Contact: 01710358818</small>
          </p>
        </div>
      </div>
      <div className="mt-3">
        <p>
          <small>Copyright @</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
