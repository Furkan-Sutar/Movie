// import React from "react";
// import { useParams } from "react-router-dom";
// import usefetchDetails from "../hooks/fetchDetails";
// import { useSelector } from "react-redux";
// import moment from "moment";

// const Detail = () => {
//   const param = useParams();
//   const imageURL = useSelector((state) => state.movieData.imgUrl);

//   const {
//     data,
//     loading: dataLoading,
//     error: dataError,
//   } = usefetchDetails(`${param?.explore}/${param?.id}`);
//   const {
//     data: castData,
//     loading: castLoading,
//     error: castError,
//   } = usefetchDetails(`${param?.explore}/${param?.id}/credits`);

//   const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");

//   console.log("castData", castData);
//   if (dataLoading || castLoading) {
//     return <div>Loading...</div>;
//   }

//   if (dataError || castError) {
//     return <div>Error loading data</div>;
//   }

//   if (!data || !data.backdrop_path) {
//     return <div>No data available</div>;
//   }
//   const writer = castData?.crew?.filter((el) => el.job === "Writer")?.map((el) => el.name)?.join(", ");
//   // console.log('writer ::',writer);
//   return (
//     <div className="overflow-y-auto min-h-screen flex flex-col">
//       <div className="w-full h-[300px] relative lg:block overflow-hidden">
//         <div className="w-full h-full pt-16">
//           <img
//             src={imageURL + data?.backdrop_path}
//             className="h-full w-full object-cover absolute top-0"
//             style={{ objectPosition: "center top" }}
//           />
//         </div>
//         <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
//       </div>

//       <div className="flex overflow-y-auto absolute sm:bottom-10 lg:absolute lg:bottom-10 flex-col lg:flex-row lg:gap-5 lg:items-center p-4 lg:p-8">
//         {data?.poster_path ? (
//           <img
//             className="w-48 h-72 object-cover rounded-md mx-auto lg:mx-0"
//             src={imageURL + data?.poster_path}
//             alt={data.name}
//           />
//         ) : (
//           <p>Image not found</p>
//         )}
//         <div className="mt-4 lg:mt-0 lg:ml-4">
//           <h1 className="text-2xl text-white">{data.title || data.name}</h1>
//           <p className="mt-2 text-gray-400">{data?.tagline}</p>
//           <div className="flex flex-wrap mt-2 text-gray-400">
//             <p>Ratings: {Number(data.vote_average)}</p>
//             <span className="mx-2">|</span>
//             <p>Views: {Number(data.vote_count)}</p>
//             <span className="mx-2">|</span>
//             <p>
//               Duration: {duration[0]}h {duration[1]}m
//             </p>
//           </div>
//           <div className="mt-4 mb-1">
//             <h3 className="font-semibold text-xl text-white">Overview:</h3>
//             <p className="text-gray-400 max-w-96   ">{data.overview}</p>
//           </div>
//           <hr />
//           <div className="flex flex-wrap mb-3 mt-2 text-gray-400">
//             <p>Status :{data.status} </p> <span className="mx-2">|</span>
//             <p>
//               Release Date : {moment(data.release_date).format("MMMM Do YYYY ")}{" "}
//             </p>
//             <span className="mx-2">|</span> <p>Revenue : {data?.revenue} </p>
//           </div>
//           <hr />
//           <div>
//             <p> Director : {castData?.crew[0]?.name} </p>
//             <p>Writer : {writer} </p>
//           </div>
//           <div>
//           <h3> Cast :  </h3>
// {
//   castData?.cast?.filter(el=>el.profile_path).map((item , ind)=>{
//     return(
//       <div key={ind}>
// <div className=" grid grid-cols-[repeat(auto-fit,1fr)] gap-2 ">
// <img className="w-24 h-24 rounded-full object-cover" src={imageURL+item?.profile_path} />
// </div>
//       </div>
//     )
//   })
// }
//            </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;



import React from "react";
import { useParams } from "react-router-dom";
import usefetchDetails from "../hooks/fetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Horizontal from '../components/Horizontal';
import usefetch from "../hooks/fetchData";

const Detail = () => {
  const param = useParams();
  const imageURL = useSelector((state) => state.movieData.imgUrl);
  const {
    data,
    loading: dataLoading,
    error: dataError,
  } = usefetchDetails(`${param?.explore}/${param?.id}`);
  const {
    data: castData,
    loading: castLoading,
    error: castError,
  } = usefetchDetails(`${param?.explore}/${param?.id}/credits`);

  const {data :similar} = usefetch(`${param?.explore}/${param?.id}/similar`);
  const {data :recommendations} = usefetch(`${param?.explore}/${param?.id}/recommendations`);
  
  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");
  
  const writer = castData?.crew
    ?.filter((el) => el.job === "Writer")
    ?.map((el) => el.name)
    ?.join(", ");

    console.log('similar',similar);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full h-80 relative overflow-hidden">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full w-full object-cover absolute top-0"
            style={{ objectPosition: "center top" }}
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="flex flex-col lg:flex-row p-4 lg:p-8 overflow-auto">
        {data?.poster_path?(
          <img
            className="w-48 h-72 object-cover rounded-md mx-auto lg:mx-0"
            src={imageURL + data?.poster_path}
            alt={data.name}
          />
        ) : (
          <p>Image not found</p>
        )}
        <div className="mt-4 lg:mt-0 lg:ml-4 text-white">
          <h1 className="text-2xl">{data?.title || data?.name}</h1>
          <p className="mt-2 text-gray-400">{data?.tagline}</p>
          <hr/>
          <div className="flex flex-wrap mt-2 text-gray-400">
            <p>Ratings: {Number(data?.vote_average)}</p>
            <span className="mx-2">|</span>
            <p>Views: {Number(data?.vote_count)}</p>
            <span className="mx-2">|</span>
            <p>
              Duration: {duration[0]}h {duration[1]}m
            </p>
          </div>
          <hr/>
          <div className="mt-4 mb-1">
            <h3 className="font-semibold text-xl">Overview:</h3>
            <p className="text-gray-400 max-w-96">{data?.overview}</p>
          </div>
          <hr />
          <div className="flex flex-wrap mb-3 mt-2 text-gray-400">
            <p>Status: {data?.status}</p> 
            <span className="mx-2">|</span>
            <p>
              Release Date: {moment(data?.release_date).format("MMMM Do YYYY")}
            </p>
            <span className="mx-2">|</span> 
            <p>Revenue: {data?.revenue}</p>
          </div>
          <hr />
          <div className="text-gray-400">
            <p className="text-lg font-semibold text-white ">Director: {castData?.crew[0]?.name}</p>
            <p className=" text-lg text-white ">Writer: <span> {writer || data?.name}</span> </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-white mt-4">Cast:</h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
              {castData?.cast
                ?.filter((el) => el?.profile_path)
                ?.map((item, ind) => (
                  <div key={ind} className="text-center">
                    <img
                      className="w-24 h-24 rounded-full object-contain object-center mx-auto"
                      src={imageURL + item?.profile_path}
                      alt={item.name}
                    />
                    <p className="text-gray-400 mt-1">{item.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

<div>
  <Horizontal data={similar} heading={ 'Similar' +param?.explore} media_type={param?.explore} />
  <Horizontal data={recommendations} heading={ 'Recomonded' +param?.explore} media_type={param?.explore} />

</div>

    </div>
  );
};

export default Detail;
