

import useFetchData from "./useFetchData.js";
import React from "react";
import { ViewSchedule } from "./ManipulateSchedule.js";

const Homelayout = () => {
  const {status, talks} = useFetchData();
  if (status==='fetched') 
  return (
      
      <div>
        
        <div className="container-fluid">
        <div className="row">



            <div className="col">
            
            <h3>Schedule</h3>
            <ViewSchedule key={"Schedule"} talks={talks}/>
            
            </div>
        </div> 
        </div>
       

      </div>
    );
  };
  export default Homelayout;
  