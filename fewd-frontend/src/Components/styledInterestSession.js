import React from "react";
import Stars from "./stars.js";
import Accordion from "react-bootstrap/Accordion";
import avgScore from "./CalcAvgRating.js"

import { RemoveInterest } from "./ManipulateInterest.js";
import AddSchedule from "./ManipulateSchedule.js";


const Item = ({ item,index }) => {
  
  return (
    <>
      <div id = {item.id}>
     <Accordion.Header> {item.title}</Accordion.Header>
     <Accordion.Body>
        <p>{item.speaker}</p>
        <p> {item.description}</p>
        <p> Session: {item.session}</p>
        <p> Time: {item.time}</p>
        <p> Tags: {item.tags.join(', ')}</p>
        <p> Avg Rating: {avgScore(item.ratings)}</p>
        
        <AddSchedule targetkey={"Schedule"} talkId={item.id}/>
        <RemoveInterest targetkey={"Interest"} talkId={item.id}/>

      </Accordion.Body>
      </div>
    </>
  );
};

export default Item;
