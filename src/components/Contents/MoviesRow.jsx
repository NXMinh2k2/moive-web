import React, { useRef } from 'react'
import styled from 'styled-components'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import NetflixLogo from '../../assets/images/logo1.png'
import {SmoothHorizontalScrolling} from '../../utils'
import { useViewport } from '../hooks'
import { useDispatch } from 'react-redux'
import { setMovieDetail } from '../store/actions'

const MoviesRowContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white)
    padding: 20px 20px 0 20px;
    position: relative;
    width: 100%;
    height: 100%;

    .heading {
        font-size: 18px;
        user-select: none;
        color: #fff;
    }

    .btnLeft {
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        transform: translateY(-20%);
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        height: 50px;
        width: 40px;
        bordor-radius: 4px;
        display: flex;
        align-items: center;
        color: #fff;

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.5s linear
        }

        &.isNetflix {
            height: 100px;
            width: max-content;
        }
    }

    .btnRight {
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        transform: translateY(-20%);
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        height: 50px;
        width: 40px;
        bordor-radius: 4px;
        display: flex;
        align-items: center;
        color: #fff;

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.5s linear
        }

        &.isNetflix {
            height: 100px;
            width: max-content;
        }
    }
`

const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    transition: all 0.5s linear;
    user-select: none;
    overflow-y: none;
    overflow-x: auto;
    overflow: hidden;
    padding: 28px 0;
    scroll-behavior: smooth;

    &:hover .movieItem {
        opacity: 0.5
    }

    .movieItem {
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.5s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position relative;

        &:hover {
            transform: scale(1.1);
            z-index: 10;
            opacity: 1;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .movieName {
            color: #fff;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4px;
            text-align: center; 
            font-size: 14px;
            background-color: rgba(0, 0, 0, 0.65);
        }
    }
`

const MoviesRow = (props) => {

    const {movies, title, isNetflix, idSection} = props
    const [windowWidth] = useViewport()

    const sliderRef = useRef()
    const movieRef = useRef()

    const dispatch = useDispatch()

    const handleSetMovie = (movie) => {
        dispatch(setMovieDetail(movie))
    }
    // const handleScrollRight = () => {
    //     const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    //     if(sliderRef.current.scrollLeft < maxScrollLeft) {
    //         SmoothHorizontalScrolling(sliderRef.current, 250, movieRef.current.clientWidth, sliderRef.current.scrollLeft)
    //     }

    // }

    // const handleScrollLeft = () => {
        
    // }

  return (
    <MoviesRowContainer id={idSection}>
        <h1 className='heading'>{title}</h1>
        <MoviesSlider 
            ref={sliderRef}
            style={
                movies && movies.length > 0  ? 
                {gridTemplateColumns: `repeat(${movies.length},
                    ${ windowWidth > 1200 ? '360px'
                        : windowWidth > 992 ? '300px'
                        : windowWidth > 768 ? "250px" 
                        : '200px'
                    })`
                } :
                {}
            }
        >    
            {
                movies && movies.length > 0 && movies.map((movie, index) => {
                    if(movie.poster_path && movie.backdrop_path !== null) {
                        let imageUrl = isNetflix ? 
                        `https://image.tmdb.org/t/p/original/${movie.poster_path}`:
                        `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                        return (
                            <div key={index} className="movieItem" ref={movieRef} onClick={() => handleSetMovie(movie)}>
                                <img src={imageUrl} alt="" />
                                <div className='movieName'>{movie.title || movie.name}</div>
                            </div>
                        )}
                })
            }
            
        </MoviesSlider>
        <div className={`btnLeft ${isNetflix && 'isNetflix'}`}>
            <FiChevronLeft />
        </div>
        <div className={`btnRight ${isNetflix && 'isNetflix'}`}>
            <FiChevronRight />
        </div>
    </MoviesRowContainer>
  )
}

export default MoviesRow


