

import useFetchData from "../useFetchData.js";
import React from "react";
import { ViewInterest } from "../ManipulateInterest.js";

const InterestedTalks = () => {
  const {status, talks} = useFetchData();
  if (status==='fetched') 
  return (
      
      <div>
        
        <div className="container-fluid">
        <div className="row">



            <div className="col">
            
            <h3>Interested Talks</h3>
            <ViewInterest targetkey={"Interest"} talks={talks}/>
            
            </div>

        
        </div> 
        </div>
       

      </div>
    );
  };
  export default InterestedTalks;
  