import React from 'react'
import ReactPlayer from 'react-player'
import {VscMute, VscUnMute } from "react-icons/vsc"
import styled from 'styled-components'


const Intro = () => {

    const IntroContainer = styled.div`
        background-color: var(--color-background);
        position: relative;
        color: var(--color-white);
        padding-top: 56%;

        .videoIntro {
            position: absolute;
            top: 0;
            left: 0;
        }

        .infoIntro {
            position: absolute;
            top: 140px;
            left: 30px;

            @media screen and (max-width: 800px) {
                top: 120px
                left: 25px;
            }

            @media screen and (max-width: 600px) {
                top: 100px
                left: 15px;
            }

            .headingIntro {
                font-size: 60px;
                transition: all 0.3s ease;

                @media screen and (max-width: 800px) {
                    font-size: 40px;
                }

                @media screen and (max-width: 600px) {
                    font-size: 24px;
                }
            }

            .overviewIntro {
                max-width: 550px;
                width: 100%;
                line-height: 1.3;
                padding-top: 25px;
                font-size: 18px;

                @media screen and (max-width: 800px) {
                    font-size: 16px;
                }

                @media screen and (max-width: 600px) {
                    font-size: 14px;
                }
            }
        }
    `

  return (
    <IntroContainer>
        <ReactPlayer 
            playing={false}
            width="100%"
            height="100%"
            volume={1}
            mutex={false}
            url="https://vimeo.com/83409369"
            className="videoIntro"
        />
        <div className='infoIntro'>
            <h1 className='headingIntro'>Netflix Elite</h1>
            <p className='overviewIntro'>NetFlex Elite Launch Campaign</p>
        </div>
        <VscMute />
    </IntroContainer>
  )
}

export default Intro