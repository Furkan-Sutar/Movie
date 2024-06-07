import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const param = useParams();
  const query = new URLSearchParams(location.search).get("q");

  const fetchExplore = async () => {
    try {
      const fetchedData = await axios.get(`/search/multi`, {
        params: {
          query: query,
          page: pageNo,
        },
      });
      setData((prev) => [...prev, ...fetchedData.data.results]);
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
    if (query) {
      fetchExplore();
    }
  }, [pageNo]);

  useEffect(() => {
    if (query) {
      setPageNo(1);
      setData([]);
      fetchExplore();
    }
  }, [location.search]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-10 mx-auto container">
      <h2 className="text-white mt-12 py-10 mx-auto text-xl lg:text-2xl">
        Search Result
      </h2>
      <div className="fixed z-50 min-w-full mr-5 top-16 lg:hidden mb-2  p-2">
        <input
          type="text"
          value={query || ""}
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          className=" mx-auto w-full rounded-full border-red-500 outline-none text-black p-2"
          placeholder="Search here..."
        />
      </div>

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

export default Search;
