

const avgScore = (Scores) => {

  if (Scores.length === 0) return 0
  
  let totalScore = 0;
  let totalAmount = 0;

  Scores.forEach((element) => {
    totalScore += element;
    totalAmount += 1;
  });

  
  
  
  return totalScore / totalAmount
};

export default avgScore;

