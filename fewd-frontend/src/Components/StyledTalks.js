import React from "react";
import StyledItem from "./styleditem";
import Accordion from "react-bootstrap/Accordion";


const TalkMenu = ({ talks }) => {
  return (
    <Accordion>
      {talks.map((talk, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <StyledItem item={talk} index={index} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default TalkMenu;