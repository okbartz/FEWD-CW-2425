import React from "react";
import Stars from "./stars";
import Accordion from "react-bootstrap/Accordion";
import avgScore from "./CalcAvgRating"


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
        <Stars position={item.id} />
        <p> Avg Rating: {avgScore(item.ratings)}</p>
        
        <button type="button" class="btn btn-outline-success">Add to schedule</button>
      </Accordion.Body>
      
    </>
  );
};

export default Item;
