
import Star from "./star";

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
              selected={Math.round(totalScore / totalAmount) > i}
              
            />
            
          ))}



          </div>
  )
  
  
};

export default avgScore;

