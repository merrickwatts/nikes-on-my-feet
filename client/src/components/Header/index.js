import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

import NavTabs from "./NavTabs";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Nikes On My Feet</h1>
        </Link>
        {Auth.loggedIn() ? (
          <>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <NavTabs />
        )}
      </div>
    </header>
  );
};

export default Header;
