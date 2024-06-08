import React, { useRef } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index,media_type }) => {
  const imageURL = useSelector((state) => state.movieData.imgUrl);
const mediya = data.media_type ?? media_type
// console.log('mediya','/'+mediya+ "/"+ data.id);
  return (
    <Link
      to={'/'+mediya+ "/"+ data.id}
      className="mt-8 container mx-auto relative mb-10 ">
      <div className="overscroll-hidden relative">
        <div
          key={index + "trending"}
          className=" relative w-full h-full min-w-[230px] max-w-[230px] min-h-[250px]">
          <div className="h-full max-w-[230px]">
            {data?.poster_path ? (
              <img
                className="h-full w-full object-cover"
                src={imageURL + data?.poster_path}
                alt={data.name}
              />
            ) : (
              <p className="min-h-[250px] text-center w-full bg-slate-300 flex justify-center items-center">Image not found </p>
            )}
          </div>

          <div className="absolute overflow-hidden bottom-[-8] h-16 backdrop-blur-lg w-full bg-black/60 p-2">
            <h2 className="truncate text-lg text-white font-semibold">
              {data?.title || data?.name}
            </h2>
            <div className="text-sm text-neutral-400 flex justify-between datas-center">
              <p>{moment(data.release_date).format("L")}</p>
              <p className="bg-black rounded-full text-xs px-1 text-white">
                Rating: {Number(data.vote_average).toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {trending && (
          <div className="absolute top-2">
            <p className="px-3 rounded-r-full text-black backdrop-blur-3xl bg-cyan-300 font-semibold ">
              #Trending{index + 1}{" "}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;

