import React from "react";
import StyledItem from "./styleditem";
import Accordion from "react-bootstrap/Accordion";


const TalkMenu = ({ talks }) => {
  if (talks === undefined || talks.length === 0) {
    return (

        <>

            <p>There are currently no talks that match the criteria</p>


        </>


    )
} else
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