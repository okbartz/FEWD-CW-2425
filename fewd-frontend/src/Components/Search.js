import React, { useState } from "react";

import TalkMenu from "./StyledTalks"






function Search({ talks }) {
   const [searchField, setSearchField] = useState("");
   const [sessionField, setSession] = useState("");
   




  const filtered = talks.filter((entry) => {
    return entry.speaker.toLowerCase().includes(searchField.toLowerCase()) && entry.session.toLowerCase().includes(sessionField.toLowerCase()) //|| entry.description.toLowerCase().includes(searchField.toLowerCase());
  });

  const uniqueSessions = [...new Set(talks.map((talk) => talk.session))];




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
          
          {/* <div class="p-2">
          <b>Session: </b>
          <label>A</label>
          <input class="form-check-input" name="SessionType" type="radio" value="A" id="flexCheckDefault"
          onChange={(e) =>  setSession(e.target.value)}
          />

          <label>B</label>
          <input class="form-check-input" name="SessionType" type="radio" value="B" id="flexCheckDefault"
          onChange={(e) =>  setSession(e.target.value)}
          />

          <label>C</label>
          <input class="form-check-input" name="SessionType" type="radio" value="C" id="flexCheckDefault"
          onChange={(e) =>  setSession(e.target.value)}
          />

          <label>None</label>
          <input class="form-check-input" name="SessionType" type="radio" value="" id="flexCheckDefault"
          onChange={(e) =>  setSession(e.target.value)}
          />

          </div> */}

          {/* Session Dropdown */}
      <select
        className="form-select"
        onChange={(e) => setSession(e.target.value)}
      >
        <option value="">Select a session</option>
        {uniqueSessions.map((session, index) => (
          <option key={index} value={session}>
            {session}
          </option>
        ))}
      </select>

     



          <TalkMenu talks={filtered} />
      </div>
  
  );
}
export default Search;