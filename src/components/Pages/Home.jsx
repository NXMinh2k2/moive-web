import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/exports';
import Intro from '../Intro/Intro'
import Content from '../Contents/Contents'
import Menu from '../Menu/Menu'
import MoviesDetail from '../MoviesDetail/MoviesDetail'


const Home = () => {

    const {MovieDetail} = useSelector(state => state.infoMovies)
    const [ isShowMovieDetail, setIsShowMovieDetail ] = useState()

    useEffect(() => {
        setIsShowMovieDetail(MovieDetail ? true : false)
    }, [MovieDetail])
    
  return (
    <div>
        <Intro />
        <Content />
        <Menu />
        <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail}/>
    </div>
  )
}

export default Home