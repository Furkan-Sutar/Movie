import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Explore = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const param = useParams();

  const fetchExplore = async () => {
    try {
      const fetchedData = await axios.get(`/discover/${param.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => [...prev, ...fetchedData.data.results]);
      setTotalPage(fetchedData.data.total_results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchExplore();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchExplore();
  }, [param.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-10 mx-auto container">
      <h2 className="text-white mt-8 mx-auto text-xl lg:text-2xl">
        Popular All {param.explore} Show
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index} className="overscroll-auto">
                <Card data={item} media_type={param.explore} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
