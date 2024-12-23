import { useLocalStorage } from "./useLocalStorage";
import React from "react";
import StyledItem from "./styledScheduleSession";
import Accordion from "react-bootstrap/Accordion";

export default function AddSchedule({ key, talkId }) {
    // Initialize state using useLocalStorage
    const [selectedTalks, setSelectedTalks] = useLocalStorage(key, []);

    // Add the new talk ID to the schedule
    const addToSchedule = () => {
        
        if (selectedTalks.some((element) => element === talkId)) {
            console.log("Entry already exists in schedule");
        } else {

            
        const updatedSchedule = [...selectedTalks, talkId]; // Create a new array to avoid mutation
        
        
        
        setSelectedTalks(updatedSchedule); // Update state using the setter function
        console.log(updatedSchedule); // Log the updated schedule
        }
    }; 

    
    // React.useEffect(() => {
    //     addToSchedule();
    // }, [talkId]);

  return (
    <div>
      <button
  className="btn btn-outline-success"
  onClick={() =>  addToSchedule("Schedule", talkId)}>

Add to schedule
</button>
    </div>
  );
}

export function ViewSchedule({key, talks}) {


    
    const [selectedTalks, setSelectedTalks] =  useLocalStorage( key, "");
    const schedule = selectedTalks;


    console.log(selectedTalks)
    console.log(key)
    console.log(talks)
    
    const filtered = talks.filter((entry) => {
         return selectedTalks.some((Currentkey) => {if(Currentkey !== null && Currentkey !== true){ 
            
           return entry.id.toLowerCase().includes(Currentkey.toString().toLowerCase())
        }
        return false;
    });
      });

      console.log("filter")
      console.log(filtered)
      
    
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

export function RemoveSchedule({ key, talkId }) {
    // Initialize state using useLocalStorage
    const [selectedTalks, setSelectedTalks] = useLocalStorage(key, []);

    // Function to remove a talk ID from the schedule
    const RemoveFromSchedule = () => {
        // Check if the talkId exists in selectedTalks
        if (selectedTalks.includes(talkId)) {
            // Create a new array without the target talkId using filter
            const updatedSchedule = selectedTalks.filter((id) => id !== talkId);

            console.log("Updated Schedule:", updatedSchedule);

            // Update state using the setter function
            setSelectedTalks(updatedSchedule);

            //console.log("selectedTalks", selectedTalks);

        } else {
            console.log("Talk ID not found in schedule");
        }
    };

    return (
        <div>
            <button
                className="btn btn-outline-danger"
                onClick={() => RemoveFromSchedule()}
            >
                Remove from schedule
            </button>
        </div>
    );
}
