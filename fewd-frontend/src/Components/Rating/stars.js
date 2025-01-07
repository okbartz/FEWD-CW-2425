import Star from "../Rating/star";
import { useLocalStorage } from "../Data/useLocalStorage";

export default function StarRating({ position, totalStars = 5 }) {

  const createArray = length => [...Array(length)];
  let positionInMenu = JSON.stringify(position);
  const [selectedStars, setSelectedStars] =  useLocalStorage( positionInMenu, 3);

  const talkId = position

  const rateTalk = (id, rating) => {

    //if statement checks for the rating
    if(rating === 0){
      alert("invalid rating: 0")
      return console.error("invalid rating: 0")
    }
    if(rating < 0){
      alert("invalid rating less than zero")
      return console.error("invalid rating less than zero")
    }

    if(rating > 5){
      alert("invalid rating more than five")
      return console.error("invalid rating more than five")
    }

    //adding the rating to the backend db
    alert("adding rating")
    fetch(`${process.env.REACT_APP_API_URL}/talks/rate/${id}/${rating}`, {
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
      
      }
    )
      .then((data) => {
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
