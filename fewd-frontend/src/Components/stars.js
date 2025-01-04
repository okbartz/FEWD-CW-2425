import Star from "./star";
import { useLocalStorage } from "./useLocalStorage";

export default function StarRating({ position, totalStars = 5 }) {

  const createArray = length => [...Array(length)];
  let positionInMenu = JSON.stringify(position);
  const [selectedStars, setSelectedStars] =  useLocalStorage( positionInMenu, 3);

  const talkId = position

  const rateTalk = (id, rating) => {
    fetch(`http://localhost:3001/talks/rate/${id}/${rating}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to rate the talk.");
        }
        return response.json();
      })
      .then((data) => {
        //setMessage(`Thank you! You rated the talk with ID ${id} a ${rating}.`);
        //toggleModal(message); // Assuming you show a modal with a message
        console.info(data)
      })
      .catch((err) => {
        console.error("Error rating talk:", err);
      });
  }; 


  return (
    <div class="border m-2 p-2">
      <h5>Provide a rating</h5>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
        
      ))}
      <p>
        {selectedStars} of {totalStars} are selected.
      </p>
      <button
  className="button btn btn-primary m-1"
  onClick={() => rateTalk(talkId, selectedStars)}
>
  Submit rating
</button>
    </div>
  );
}
