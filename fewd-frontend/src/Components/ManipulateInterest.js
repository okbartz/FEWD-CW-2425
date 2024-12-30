import { useLocalStorage } from "./useLocalStorage";

import useFetchData from "./useFetchData";
import React from "react";
import StyledItem from "./styledInterestSession";
import Accordion from "react-bootstrap/Accordion";


export default function AddInterest({ targetkey, talkId }) {
    
    
    // Initialize state using useLocalStorage
    const [selectedTalks, setSelectedTalks] = useLocalStorage(targetkey, []);

    const { status, talks } = useFetchData();

    // Add the new talk ID to the interest
    const addToInterest = () => {
        console.log("Button clicked");

        var selectedTalks = GetInterest(targetkey)

        // Check if the talk is already in the interest
        if (selectedTalks.includes(talkId)) {
            console.log("Entry already exists in the interest");
            alert("This talk is already exists in the interest")
            return;
        }

        // Find the details of the target talk
        const targetTalk = talks.find((talk) => talk.id.toString() === talkId.toString());
        if (!targetTalk) {
            console.log("Target talk not found");
            return;
        }

        // Check for time conflicts with already selected talks
        const hasConflict = selectedTalks.some((id) => {
            const interestdTalk = talks.find((talk) => talk.id.toString() === id.toString());
            return interestdTalk && interestdTalk.time === targetTalk.time;
        });

        if (hasConflict) {
            console.log("This time slot is already taken");
            alert("The time slot is taken")
            return;
        }

        // Add the new talk to the interest
        const updatedInterest = [...selectedTalks, talkId];
        setSelectedTalks(updatedInterest);
        console.log("Updated interest:", updatedInterest);
    };

    return (
        <div>
            <button className="btn btn-outline-success" onClick={addToInterest}>
                Add to interest
            </button>
        </div>
    );
}

export function ViewInterest({targetkey, talks}) {


    
    const [selectedTalks, setSelectedTalks] =  useLocalStorage( targetkey, []);
   

    console.log(selectedTalks)
    console.log(targetkey)
    console.log(talks)
    
    const filtered = talks.filter((entry) => {
         return selectedTalks.some((Currenttargetkey) => {
            if(Currenttargetkey !== null && Currenttargetkey !== true){ 
            
           return entry.id === (Currenttargetkey.toString())
        }
        return false;
    });
      });

      console.log("filter")
      console.log(filtered)
      
      if(filtered === undefined || filtered.length === 0){
        return (
        
        <>
        
        <p>There are currently no talks added to you interest!!</p>
    
        
        </>

    
        )}
      




    return (
        
        <Accordion>
        {filtered.map((talk, index) => {

        
            return (
            <Accordion.Item eventKey={index} key={index}>
                <StyledItem item={talk} index={index} />
            </Accordion.Item>
            );
        })}
        </Accordion>
    );
    

  
}

function GetInterest(targetkey) {



    const saved = localStorage.getItem(targetkey);
    const initial = JSON.parse(saved);
      
    
    return initial
    

  
}


export function RemoveInterest({ targetkey, talkId }) {
    // Initialize state using useLocalStorage
    const [selectedTalks, setSelectedTalks] = useLocalStorage(targetkey, []);

    // TODO figure out how to place the local storage so that all the buttons are using the same memory.

    // Function to remove a talk ID from the interest
    const RemoveFromInterest = () => {
        
        var selectedTalks = GetInterest(targetkey)

        // Check if the talkId exists in selectedTalks
        if (selectedTalks.includes(talkId)) {
            // Create a new array without the target talkId using filter
            const updatedInterest = selectedTalks.filter((id) => id !== talkId);

            console.log("Updated Interest:", updatedInterest);

            // Update state using the setter function
            setSelectedTalks(updatedInterest);
            
            console.log(selectedTalks)
            //console.log("selectedTalks", selectedTalks);

            document.getElementById(talkId).remove();

        } else {
            console.log("Talk ID not found in interest");
        }
    };

    return (
        <div>
            <button
                className="btn btn-outline-danger"
                onClick={() => RemoveFromInterest()}
            >
                Remove from interest
            </button>
        </div>
    );
}
