import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImgurl } from "./store/MovieSlice.jsx";
function App() {
  const dispatch = useDispatch();
  const fetchAlltrendData = async () => {
    try {
      const fetchData = await axios.get("/trending/all/day");
      // console.log("response", fetchData.data.results);

      dispatch(setBannerData(fetchData.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const fetchConfig = await axios.get("/configuration");
      dispatch(setImgurl(fetchConfig.data.images.secure_base_url + "original"));
      // console.log("configuration", fetchConfig.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlltrendData();
    fetchConfiguration();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <MobileNavigation />
      <Footer />
    </>
  );
}

export default App;