import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useViewport } from '../hooks'
import { getSearchMovies, setMovieDetail } from '../store/actions'

const SearchPane = styled.div`
    width: 100%;
    min-height: 92vh;
    padding-top: 80px;
    background: var(--color-background);
    transition: all 0.5s linear;

    .searchContent {
        padding: 40px 60px;
        display: grid;
        gap: 8px;

        &:hover .movieItem {
            opacity: 0.6;
        }

        .movieItem {
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            border-radius: 12px;
            margin: 20px 0;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.5s linear;

            &:hover {
                transform: scale(1.2);
                z-index: 10;
                opacity: 1;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            span {
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.5);
                color: var(--color-white);
                text-align: center;
                padding: 4px;
                font-weight: bold;
            }
        }
    }
`

const NotFound = styled.div`
    padding: 5rem 8rem;
    color: #fff;
`
    

const useQuery = () => new URLSearchParams(useLocation().search)
const SearchMovies = () => {

    const [windowWidth] = useViewport()
    const dispatch = useDispatch()
    const {SearchMovies} = useSelector(state => state.infoMovies)

    const keywords = useQuery().get('keywords')

    useEffect(() => {
        if(keywords) dispatch(getSearchMovies(keywords))
    }, [keywords, dispatch])

  return (
    <SearchPane>
        {
            SearchMovies && SearchMovies.length > 0 ? (
                <div 
                    className='searchContent'
                    style={{
                        gridTemplateColumns: `repeat(${
                            windowWidth > 1200 ? 5 :
                            windowWidth > 992 ? 4 :
                            windowWidth > 768 ? 3 :
                            windowWidth > 600 ? 2 : 1
                        }, auto)`
                    }}
                >
                    {
                        SearchMovies.map((movie, index) => {
                            if(movie.backdrop_path !== null && movie.media_type !== 'person') {
                                const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                return (
                                    <div className='movieItem' key={index} onClick={() => dispatch(setMovieDetail(movie))}>
                                        <img src={imageUrl} alt="" />
                                        <span>{movie.title || movie.name}</span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                ) : 
                (
                    <NotFound>
                        <h1>{`Your search for "123" did not have any result`}</h1>
                    </NotFound>
                )
        }
    </SearchPane>
  )
}

export default SearchMovies