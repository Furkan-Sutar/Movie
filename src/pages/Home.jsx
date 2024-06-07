import React from 'react'
import BannerHome from '../components/BannerData'
import { useSelector } from 'react-redux'
import Card from '../components/Card';
import Horizontal from '../components/Horizontal';
import usefetch from '../hooks/fetchData';

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);
const { data : NowPlaying} = usefetch('/movie/now_playing')
const { data : OnTheAir} = usefetch('/tv/on_the_air')
const { data : Popular} = usefetch('/tv/popular')


  return (
    <div>
    <BannerHome />
    <Horizontal data={trendingData} trending={true} heading={'Trending'} />
    <Horizontal data={NowPlaying} trending={false} heading={' NowPlaying'} media_type={'movie'} />
    <Horizontal data={OnTheAir} trending={false} heading={'OnTheAir'} media_type={'tv'} />
    <Horizontal data={Popular} trending={false} heading={'Popular'} media_type={'tv'} />

    </div>
  )
}

export default Home