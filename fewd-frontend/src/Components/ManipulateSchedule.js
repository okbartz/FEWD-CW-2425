import { useLocalStorage } from "./Data/useLocalStorage";

import useFetchData from "./Data/useFetchData";
import React from "react";
import StyledItem from "./Styled/styledScheduleSession";
import Accordion from "react-bootstrap/Accordion";

// export default function AddSchedule({ targetkey, talkId }) {
//     // Initialize state using useLocalStorage
//     const [selectedTalks, setSelectedTalks] = useLocalStorage(targetkey, []);

//     const {status, talks} = useFetchData();

//     // Add the new talk ID to the schedule
//     const addToSchedule = () => {

//         var selectedTalks = GetSchedule(targetkey)


//         console.log("btn wrks")


//         if (selectedTalks.some((element) => element === talkId)) {
//             console.log("Entry already exists in schedule");
//         } else {

//             const filtered = talks.filter((entry) => {
//                 return selectedTalks.some((Currenttargetkey) => {
//                    if(Currenttargetkey !== null && Currenttargetkey !== true){ 


//                   return entry.id === (Currenttargetkey.toString())



//                 }
//                return false;
//            });
//              });

//              console.log(filtered)


//              const targetID = talks.filter((entry) => {
//                 return entry.id.toLowerCase().includes(talkId.toString())
//               });

//               console.log(targetID)

//         const checkSchedule = targetID.some((entry) => {


//             filtered.some((Currenttargetkey) => {


//                     if(entry.time === Currenttargetkey.time){

//                         console.log("this time slot is already taken")
//                         return true;

//                     }
//                     else {
//                         console.log(Currenttargetkey.time , "!=", entry.time)

//                         return false}

//             })


//         });

//         console.log("CheckShedule: ", checkSchedule)

//         if (checkSchedule === false){
//         const updatedSchedule = [...selectedTalks, talkId]; // Create a new array to avoid mutation



//         setSelectedTalks(updatedSchedule); // Update state using the setter function

//         console.log(updatedSchedule); // Log the updated schedule
//         }

//     }

// }; 


//     // React.useEffect(() => {
//     //     addToSchedule();
//     // }, [talkId]);

//   return (
//     <div>
//       <button
//   className="btn btn-outline-success"
//   onClick={() =>  addToSchedule("Schedule", talkId)}>

// Add to schedule
// </button>
//     </div>
//   );
// }

export default function AddSchedule({ targetkey, talkId }) {
    // Initialize state using useLocalStorage
    const [selectedTalks, setSelectedTalks] = useLocalStorage(targetkey, []);

    const { status, talks } = useFetchData();

    // Add the new talk ID to the schedule
    const addToSchedule = () => {
        console.log("Button clicked");
        

        var selectedTalks = GetSchedule(targetkey)

        // Check if the talk is already in the schedule
        if (selectedTalks.includes(talkId)) {
            console.log("Entry already exists in the schedule");
            alert("This talk already exists in the schedule")
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
            const scheduledTalk = talks.find((talk) => talk.id.toString() === id.toString());
            return scheduledTalk && scheduledTalk.time === targetTalk.time;
        });

        if (hasConflict) {
            console.log("This time slot is already taken");
            alert("The time slot is taken")
            return;
        }

        // Add the new talk to the schedule
        const updatedSchedule = [...selectedTalks, talkId];
        setSelectedTalks(updatedSchedule);
        console.log("Updated schedule:", updatedSchedule);
        alert("Talk added to schedule")
    };

    return (
        <div>
            <button className="btn btn-outline-success" onClick={addToSchedule}>
                Add to schedule
            </button>
        </div>
    );
}

export function ViewSchedule({ targetkey, talks }) {



    const [selectedTalks, setSelectedTalks] = useLocalStorage(targetkey, []);



    // filter the talks that the user has added
    const filtered = talks.filter((entry) => {
        return selectedTalks.some((Currenttargetkey) => {
            if (Currenttargetkey !== null && Currenttargetkey !== true) {

                return entry.id === (Currenttargetkey.toString())
            }
            return false;
        });
    });

    console.log("filter")
    console.log(filtered)
    // if there is no talks present return
    if (filtered === undefined || filtered.length === 0) {
        return (

            <>

                <p>There are currently no talks added to you schedule!!</p>


            </>


        )
    }





    return (

        <Accordion>
            {filtered.map((talk, index) => {

                // return the talks of the user
                return (
                    <Accordion.Item eventKey={index} key={index}>
                        <StyledItem item={talk} index={index} />
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );



}

function GetSchedule(targetkey) {

//retrieving from the local storage, to prevent actions from overriding other actions

    const saved = localStorage.getItem(targetkey);
    const initial = JSON.parse(saved);


    return initial



}


export function RemoveSchedule({ targetkey, talkId }) {
    // Initialize state using useLocalStorage
    const [selectedTalks, setSelectedTalks] = useLocalStorage(targetkey, []);

    // TODO figure out how to place the local storage so that all the buttons are using the same memory.

    // Function to remove a talk ID from the schedule
    const RemoveFromSchedule = () => {

        var selectedTalks = GetSchedule(targetkey)

        // Check if the talkId exists in selectedTalks
        if (selectedTalks.includes(talkId)) {
            // Create a new array without the target talkId using filter
            const updatedSchedule = selectedTalks.filter((id) => id !== talkId);

            console.log("Updated Schedule:", updatedSchedule);

            // Update state using the setter function
            setSelectedTalks(updatedSchedule);

            console.log(selectedTalks)
            //console.log("selectedTalks", selectedTalks);

            document.getElementById(talkId).remove();

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
