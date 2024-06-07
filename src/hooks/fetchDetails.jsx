import axios from "axios";
import { useEffect, useState } from "react";

const usefetchDetails = (endpoint) => {
  const [data, setData] = useState();

  const fetching = async () => {
    try {
      const dataResponse = await axios.get(endpoint);
      // console.log("dataResponse", dataResponse.data);
      setData(dataResponse.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);
  return { data };
};

export default usefetchDetails;