
// import { items } from "./data/data.js";
import useFetchData from "./useFetchData.js";
import React from "react";
import Search from "./Search"

const BrowseTalks = () => {
  const {status, talks} = useFetchData();
  if (status==='fetched') 
  return (
      
      <div>
        
        <div className="container-fluid">
        <div className="row">
        


            <div className="col">
            
            <h3>Browse Talks</h3>
            <Search talks={talks}/>
            
            
            </div>
        </div> 
        </div>
       

      </div>
    );
  };
  export default BrowseTalks;
  