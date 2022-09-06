import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from '../../photoes/sds.png'
import {
  useAuthState
} from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import auth from "../../firebase.init";
import Loading from "./Loading";


const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading){
    return <Loading></Loading>
  }

  const logout = () => {
    signOut(auth);
  };

  return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="p-lg-2">
      <Container>
          <Navbar.Brand className="p-4 "  href="#home">
            
            <span  style={{backgroundImage: `url(${logo})`,  backgroundSize: 'cover'}} className=" fw-bold p-3 fs-2 text-">Picturesque</span>
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link to={'/'}><Link className="text-decoration-none text-white ps-4" to={'/'}>Home</Link></Nav.Link>
            <Nav.Link > <Link className="text-decoration-none text-white ps-4" to={'/about'}>About </Link></Nav.Link>
            <Nav.Link ><Link className="text-decoration-none text-white ps-4" to={'/blog'}>Blog </Link></Nav.Link>
            {
              user? <Nav.Link ><Link className="text-decoration-none text-white ps-4" onClick={logout} to={'/login'}>SignOut</Link></Nav.Link> : <Nav.Link ><Link className="text-decoration-none text-white ps-4" to={'/login'}>SignIn</Link></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
