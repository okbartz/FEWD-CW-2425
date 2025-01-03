

import useFetchData from "../useFetchData.js";
import React from "react";
import { ViewSchedule } from "../ManipulateSchedule.js";
import { Link, Outlet } from "react-router-dom";

const Homelayout = () => {

  return (

    <div class="text-center">

      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">


        <main role="main" class="inner cover">
          <h1 class="cover-heading">Conference for Web Developers</h1>
          <p class="lead">This Web Application is designed to help organise attendees to plan their day(s) at the conference, the attendee can provide feedback to the talks.</p>
          <p class="lead fw-normal">Get started below, add talks to your interested before adding them to your schedule.</p>

          <p class="lead">

          <Link class="btn btn-lg btn-secondary" to="browse">
          Get Started
        </Link>

            
          </p>
        </main>

      
      </div>


      



    </div>
  );
};
export default Homelayout;
