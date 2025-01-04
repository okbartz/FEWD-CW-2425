import React from "react";
import Stars from "./stars";
import Accordion from "react-bootstrap/Accordion";
import avgScore from "./CalcAvgRating"

import CommentTalk from "./comments.js";

import { RemoveSchedule } from "./ManipulateSchedule.js";

import CommentDisplay from "./DisplayComments.js";


const Item = ({ item, index }) => {

  return (
    <>
      <div id={item.id}>
        <Accordion.Header> {item.title}</Accordion.Header>
        <Accordion.Body>
          <p>{item.speaker}</p>
          <p> {item.description}</p>
          <p> Session: {item.session}</p>
          <p> Time: {item.time}</p>
          <p> Tags: {item.tags.join(', ')}</p>
          <p> Avg Rating: {avgScore(item.ratings)}</p>
          <RemoveSchedule targetkey={"Schedule"} talkId={item.id} />

          
          <CommentTalk TalkId={item.id} />
          <Stars position={item.id} />
          

          {item.comments && item.comments.length > 0 ? (
            <CommentDisplay comments={item.comments} />
          ) : (
            <p>No comments available</p>
          )}

        </Accordion.Body>
      </div>
    </>
  );
};

export default Item;
