
// import { items } from "./data/data.js";
import useFetchData from "../useFetchData.js";
import React from "react";
import Search from "../Search.js"

const BrowseTalks = () => {
  const {status, talks} = useFetchData();
  if (status==='fetched') 
  return (
      
      <div>
        
        <div className="container-fluid">
        <div className="row">
        


            <div className="col">
            
            <h3>Browse Talks</h3>

            <p>Use the different fields below to sort for specific talks that you are interested in.</p>
            
            <Search talks={talks}/>
            
            
            
            
            </div>
        </div> 
        </div>
       

      </div>
    );
  };
  export default BrowseTalks;
  