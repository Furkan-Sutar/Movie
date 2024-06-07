import axios from "axios";
import { useEffect, useState } from "react";

const usefetch = (endpoint) => {

  const [data, setData] = useState([]);

  const fetching = async () => {
    try {
      const dataResponse = await axios.get(endpoint);
      // console.log("dataResponse", dataResponse.data.results);
      setData(dataResponse.data.results)
    } catch (error) {
      console.log("error", error);
    }
  };
  
  useEffect(()=>{
    fetching()
  },[])
  return {data}
};
export default usefetch;
