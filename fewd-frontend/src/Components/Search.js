import React, { useState } from "react";

import TalkMenu from "./StyledTalks"






function Search({ talks }) {
   const [searchField, setSearchField] = useState("");
   const [sessionField, setSession] = useState("");
   const [timeField, setTime] = useState("");
   const [tagField, setTag] = useState("");
   




  const filtered = talks.filter((entry) => {
    return entry.speaker.toLowerCase().includes(searchField.toLowerCase()) && entry.session.toLowerCase().includes(sessionField.toLowerCase()) && entry.time.toLowerCase().includes(timeField.toLowerCase()) && entry.tags.some(tag => tag.toLowerCase().includes(tagField.toLowerCase())) //|| entry.description.toLowerCase().includes(searchField.toLowerCase());
  });

  const uniqueSessions = [...new Set(talks.map((talk) => talk.session))];
  const uniqueTimes = [...new Set(talks.map((talk) => talk.time))];
  
  //flat map, mapping the array and then flatting it to a 2d array
  const uniqueTags = [...new Set(talks.flatMap((talk) => talk.tags))];





  return (
      <div>
          <div>
            <input
              className="form-control m-1"
              type="text"
              placeholder="Search by speaker..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          
          
      {/* Selecting the session */}

      <select
        className="form-select m-1"
        onChange={(e) => setSession(e.target.value)}
      >
        <option value="">Select a session</option>
        {uniqueSessions.map((session, index) => (
          <option key={index} value={session}>
            {session}
          </option>
        ))}
      </select>

      {/* Selecting the time */}

      <select
        className="form-select m-1"
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a Time</option>
        {uniqueTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      {/* Selecting the tags */}

      <select
        className="form-select m-1"
        onChange={(e) => setTag(e.target.value)}
      >
        <option value="">Select Tags</option>
        {uniqueTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      

      <hr></hr>
      
     

        <h5>Current Search:</h5>
        
        <TalkMenu talks={filtered} />
        
        
          
      </div>
  
  );
}
export default Search;