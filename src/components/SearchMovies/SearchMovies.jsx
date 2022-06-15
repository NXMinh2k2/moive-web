import React from 'react'
import styled from 'styled-components'
import { useViewport } from '../hooks'

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
    

const SearchMovies = () => {

    const [windowWidth] = useViewport()

  return (
    <SearchPane>
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
            <div className='movieItem'>
                <img src='https://cdn.europosters.eu/image/750webp/115936.webp' alt="" />
                <span>Movie Name</span>
            </div>
            <div className='movieItem'>
                <img src='https://cdn.europosters.eu/image/750webp/115936.webp' alt="" />
                <span>Movie Name</span>
            </div>
            <div className='movieItem'>
                <img src='https://cdn.europosters.eu/image/750webp/115936.webp' alt="" />
                <span>Movie Name</span>
            </div>
            <div className='movieItem'>
                <img src='https://cdn.europosters.eu/image/750webp/115936.webp' alt="" />
                <span>Movie Name</span>
            </div>
            <div className='movieItem'>
                <img src='https://cdn.europosters.eu/image/750webp/115936.webp' alt="" />
                <span>Movie Name</span>
            </div>
            <div className='movieItem'>
                <img src='https://cdn.europosters.eu/image/750webp/115936.webp' alt="" />
                <span>Movie Name</span>
            </div>
            <div className='movieItem'>
                <img src='https://cdn.europosters.eu/image/750webp/115936.webp' alt="" />
                <span>Movie Name</span>
            </div>
            <div className='movieItem'>
                <img src='https://cdn.europosters.eu/image/750webp/115936.webp' alt="" />
                <span>Movie Name</span>
            </div>
        </div>
    </SearchPane>
  )
}

export default SearchMovies