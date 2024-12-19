import React from "react";
// import Stars from "./stars";
import Accordion from "react-bootstrap/Accordion";

const Item = ({ item,index }) => {
  return (
    <>
     <Accordion.Header> {item.title}</Accordion.Header>
     <Accordion.Body>
        <p>{item.speaker}</p>
        <p> {item.description}</p>
        <p> Session: {item.session}</p>
        <p> Time: {item.time}</p>
        <p> Tags: {item.tags}</p>
        {/* <Stars position={index} /> */}
      </Accordion.Body>

    </>
  );
};

export default Item;
