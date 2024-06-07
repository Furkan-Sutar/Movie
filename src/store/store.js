import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './MovieSlice.jsx';
export const store = configureStore({
  reducer: {
    movieData: movieReducer,
  },
});
