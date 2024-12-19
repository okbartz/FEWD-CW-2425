import React from "react";
import { Link, Outlet } from "react-router-dom";



const Navigation = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

      
      <div class="collapse navbar-collapse me-auto" id="navbarNav">
        
        <Link class="nav-item nav-link p-1" to="/">
        Home
        </Link>
        
        <Link class="nav-item nav-link p-1" to="browse">
          Browse
        </Link>

        </div>
      </nav>
      <Outlet />
      
    </>
  );
};
export default Navigation;
