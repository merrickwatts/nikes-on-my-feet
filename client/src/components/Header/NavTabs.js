import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

function NavTabs() {
  return (
    <nav className="text-center">
      {Auth.loggedIn() ? (
        <>
          <Link to="/profile">Me</Link>
          <a href="/" onClick={logout}>
            Logout
          </a>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}
export default NavTabs;
