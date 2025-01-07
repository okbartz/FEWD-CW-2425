
import Star from "./Rating/star";

//calculating the average rating of stars
const createArray = length => [...Array(length)];
const avgScore = (Scores) => {

  if (Scores.length === 0) return 0

  let totalScore = 0;
  let totalAmount = 0;

  Scores.forEach((element) => {
    totalScore += element;
    totalAmount += 1;
  });




  return (
    <div>
      {createArray(5).map((n, i) => (
        <Star
          key={i}
          // returning the average amount of stars rounded
          selected={Math.round(totalScore / totalAmount) > i}

        />

      ))}



    </div>
  )


};

export default avgScore;

