import  { useEffect, useState, useCallback } from "react";

const useFetchData = () => {
    const [status, setStatus] = useState('idle');
    const [talks, setTalks]=useState([{
        id:"",
        speaker:"",
        title:"",
        description:"",
        session:"",
        time:"",
        tags:"",
        ratings:"",
        comments:"",
      }]);

  const fetchData = useCallback(() => {
    
    const url = `${process.env.REACT_APP_API_URL}/talks`;

    fetch(url)
      .then((response) => response.json())
      .then((incomingData) => {
        //console.log(incomingData)
        setTalks(incomingData);
        setStatus('fetched');
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { status, talks };
};
export default useFetchData;