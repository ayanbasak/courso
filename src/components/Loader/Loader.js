import React from 'react';
import styled from 'styled-components';

export const Loader = () => {
    return (
        <PreLoader>
            <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </PreLoader>
    )
}

const PreLoader = styled.div`  
    .flone-preloader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f7f7f7;
    z-index: 999999;
    }

    .flone-preloader {
    width: 200px;
    height: 200px;
    display: inline-block;
    padding: 0;
    text-align: left;
    box-sizing: border-box;
    position: absolute;
    top: 40vh;
    left: 40vw;

    @media screen and (max-width: 400px) {
        top: 30vh;
        left: 25vw;
    }
    }

    .flone-preloader span {
    position: absolute;
    display: inline-block;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: #0a66c2; // loader color
    -webkit-animation: preloader 1.3s linear infinite;
    animation: preloader 1.3s linear infinite;
    }

    .flone-preloader span:last-child {
    animation-delay: -0.8s;
    -webkit-animation-delay: -0.8s;
    }

    @keyframes preloader {
    0% {
        transform: scale(0, 0);
        opacity: 0.5;
    }

    100% {
        transform: scale(1, 1);
        opacity: 0;
    }
    }

    @-webkit-keyframes preloader {
    0% {
        -webkit-transform: scale(0, 0);
        opacity: 0.5;
    }

    100% {
        -webkit-transform: scale(1, 1);
        opacity: 0;
    }
    }
`;


export default Loader;