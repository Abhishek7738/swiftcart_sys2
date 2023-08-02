import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
      <div className="logo">
            <img src="/swiftcart_logo1.png" alt="" /> SwiftCart
          </div>
  
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul>
        <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              {isAuthenticated ? (
                <NavLink
                  onClick={() => logout({ returnTo: window.location.origin })}>
                  Logout
                </NavLink>
              ) : (
                <NavLink onClick={() => loginWithRedirect()}>Login</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};
export default Navbar;