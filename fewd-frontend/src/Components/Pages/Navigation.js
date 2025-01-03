import React from "react";
import { Link, Outlet } from "react-router-dom";



const Navigation = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        
        <Link className="nav-item nav-link p-1" to="/">
        Home
        </Link>
        
        <Link className="nav-item nav-link p-1" to="browse">
          Browse
        </Link>

        <Link className="nav-item nav-link p-1" to="interested">
          Interested Talks
        </Link>

        <Link className="nav-item nav-link p-1" to="schedule">
          Scheduled Talks
        </Link>

        </div>
      </nav>
      <Outlet />
      
    </>
  );
};
export default Navigation;
