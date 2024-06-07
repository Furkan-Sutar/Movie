import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router.jsx';
import axios from 'axios';
import {Provider} from 'react-redux'
import { store } from './store/store.js';

const  React_Data_Movie_Authanication = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmE0OWNiM2EwM2Q3MmMyNjEyNjI3MDcxNzgzOTgzYSIsInN1YiI6IjY2NDE5ODVkZmVhZWZiMjBiMjAxOWFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73QT860iDO0V6mxMmqACWfGDwa8ct54BcU-GJgG2zB0'
// Set the base URL for axios
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// Use the environment variable for the Authorization header
axios.defaults.headers.common['Authorization'] = `Bearer ${React_Data_Movie_Authanication}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
   </Provider> 
);
