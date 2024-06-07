import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imgUrl: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImgurl: (state, action) => {
      state.imgUrl = action.payload;
    },
  },
});

export const { setBannerData ,setImgurl } = movieSlice.actions;
export default movieSlice.reducer;
