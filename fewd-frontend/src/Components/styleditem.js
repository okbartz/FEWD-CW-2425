import React from "react";
import Stars from "./stars";
import Accordion from "react-bootstrap/Accordion";
import avgScore from "./CalcAvgRating"

import AddInterest from "./ManipulateInterest";
import AddSchedule from "./ManipulateSchedule.js";


const Item = ({ item,index }) => {
  return (
    <>
      
     <Accordion.Header> {item.title}</Accordion.Header>
     <Accordion.Body>
        <p>{item.speaker}</p>
        <p> {item.description}</p>
        <p> Session: {item.session}</p>
        <p> Time: {item.time}</p>
        <p> Tags: {item.tags.join(', ')}</p>
        
        <p> Avg Rating: {avgScore(item.ratings)}</p>
        
        <AddInterest targetkey={"Interest"} talkId={item.id}/>
        <br></br>
        <AddSchedule targetkey={"Schedule"} talkId={item.id}/>


      </Accordion.Body>
      
    </>
  );
};

export default Item;
