import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../Store/MyContext";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const {state: {cart}} = CartState();
  // console.log(cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
        <div className="container-fluid">
          <Link to ="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/helpus" className="nav-link">
                Help
              </Link>
              <Link to="/cart" className="nav-link" >
                <BsCart4 />
                <span>{cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
