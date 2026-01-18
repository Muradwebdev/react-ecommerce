import { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo/logo.png";
const NavItems = ({ setHeaderFixed }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const [socialToogle, setSocialToogle] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollX > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <>
      <div
        className={`header-top 
    
    ${socialToogle ? "open" : ""}`}
      >
        <div className="container">
          <div className="header-top-area">
            <NavLink to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </NavLink>
            <NavLink to="/login" className="lab-btn me-3">
              <span>Log in</span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            {/* menu are */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/shop"
                    >
                      Shop
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/about"
                    >
                      About
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Sign in & Log in */}
              <NavLink to="/signup" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </NavLink>
              <NavLink to="/login" className=" d-none d-md-block">
                Log in
              </NavLink>

              {/* menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* social toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToogle(!socialToogle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavItems;
