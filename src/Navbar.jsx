import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  return (
    <>
      <header>
        <nav>
          <div className="logo"><img src="/swiftcart_logo1.png" alt="" /> SwiftCart</div>
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
              {
                isAuthenticated ? 
                (<NavLink onClick={() => logout({ returnTo: window.location.origin })}>Logout</NavLink>)
                :
                (<NavLink onClick={() => loginWithRedirect()}>Login</NavLink>)
              }
              
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
