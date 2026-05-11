import { Link, Navigate } from "react-router-dom";

import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [logout, setLogout] = useState(false);

  const logoutUser = () => {
    localStorage.removeItem("user");

    setLogout(true);
  };

  if (logout) {
    return <Navigate to="/login" />;
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <h1 className="logo-title">MovieHub</h1>
      </Link>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        {user ? (
          <>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
            <Link to="/history" className="nav-link">
              History
            </Link>
          </>
        ) : (
          <div className="auth-buttons">
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>

            <Link to="/signup">
              <button className="signup-btn">Signup</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
