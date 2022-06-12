import React from 'react'
import {MdSearch} from 'react-icons/md'
import styled from 'styled-components'
import NetflixLogo from '../../assets/images/logo1.png'

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    
    @media only screen and (max-width: 600px) {
        height: 100px
    }
    
    .navContainer {
        background-color: var(--color-background);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;

       @media only screen and (max-width: 600px) {
        flex-direction: column;
       }

        .logo {
            width: 120px;
            cursor: pointer;

            img {
                width: 100%;
            }
        }

        .navSearch {
            color: var(--color-white);
            padding-right: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            
            &:hover .iconSearch {
                color: var(--color-white);
            }

            .iconSearch {
                width: 20px;
                height: 20px;
                cursor: pointer
                color: #bbb;
                transform: translateX(24px) 
            }

            input {
                font-size: 14px;
                font-weight: 600;
                color: #fff;
                outline: none;
                width: 0;
                padding: 10px;
                cursor: pointer;
                opacity: 0;
                background-color: var(--color-background);
                border: 1px solid #fff;
                transition: width 0.5s;

                &:focus {
                    padding-left: 30px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }
            }
        }
    }
`

const Navbar = () => {
  return (
    <Navigation>
        <div className='navContainer'>
            <div className='logo'>
                <img src={NetflixLogo} alt="" />
            </div>
            <div className='navSearch'>
                <MdSearch className='iconSearch'/>
                <input type="text" name="" id="" placeholder='Input title, genres, people'/>
            </div>
        </div>
    </Navigation>
  )
}

export default Navbar