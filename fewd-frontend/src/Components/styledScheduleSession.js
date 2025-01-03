import React from "react";
import Stars from "./stars";
import Accordion from "react-bootstrap/Accordion";
import avgScore from "./CalcAvgRating"

import { RemoveSchedule } from "./ManipulateSchedule.js";



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
        <Stars position={item.id} />
        <p> Avg Rating: {avgScore(item.ratings)}</p>
        
        <RemoveSchedule targetkey={"Schedule"} talkId={item.id}/>
        

      </Accordion.Body>
      </div>
    </>
  );
};

export default Item;
