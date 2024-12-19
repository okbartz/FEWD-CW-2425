import React, { useState } from "react";

import TalkMenu from "./StyledTalks"






function Search({ talks }) {
   const [searchField, setSearchField] = useState("");
   const [sessionField, setSession] = useState("");




  const filtered = talks.filter((entry) => {
    return entry.speaker.toLowerCase().includes(searchField.toLowerCase())//|| entry.description.toLowerCase().includes(searchField.toLowerCase());
  });


  return (
      <div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search by speaker..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <div>
          A
          <input class="form-check-input" type="checkbox" value="A" id="flexCheckDefault"
          
          />

          B
          <input class="form-check-input" type="checkbox" value="B" id="flexCheckDefault"
          
          />

          C
          <input class="form-check-input" type="checkbox" value="C" id="flexCheckDefault"
          
          />

          </div>
          <TalkMenu talks={filtered} />
      </div>
  
  );
}
export default Search;