// import React from "react";
// import { IoMdClose } from "react-icons/io";
// import usefetch from "../hooks/fetchData";

// const VideoPlay = ({ data, media_type, close }) => {
//   const { data: VideoData } = usefetch(`${media_type}/${data}/videos`);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
//       <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 overflow-hidden">
//         <button
//           onClick={close}
//           className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
//         >
//           <IoMdClose className="text-3xl" />
//         </button>
//         <div className="relative pt-[56.25%]">
//           <iframe
//             className="absolute inset-0 w-full h-full"
//             src={`https://www.youtube.com/embed/${VideoData[0]?.key}`}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title="Video"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlay;

import React from "react";
import { IoMdClose } from "react-icons/io";
import usefetch from "../hooks/fetchData";

const VideoPlay = ({ data, media_type, close }) => {
  const { data: VideoData } = usefetch(`${media_type}/${data}/videos`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4">
        <button
          onClick={close}
          className="absolute -top-0 z-50 right-0 text-red-500 hover:text-red-700"
        >
          <IoMdClose className="text-4xl" />
        </button>
        <div className="relative pt-[56.25%] overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${VideoData[0]?.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
