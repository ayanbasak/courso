import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

export default function ViewDemo() {

    return (
        <div style={{ marginTop: '80px' }}>
            <TopSection />
            <TopText>
                Please Watch Demos
                <TextIcon>
                    <HiOutlineArrowNarrowDown fontSize='3rem' color="blue" style={{ position: 'absolute', right: '-30px' }} />
                </TextIcon>
            </TopText>
            <VideoSection>
                <ReactPlayer
                    url={"https://www.youtube.com/watch?v=ZMI28mIpRV0"}
                    controls
                    loop
                    volume='1'
                    width="90vw"
                />
            </VideoSection>
            <VideoSection>
                <ReactPlayer
                    url={"https://www.youtube.com/watch?v=A-u248DSVCo&t=540s"}
                    controls
                    loop
                    volume='1'
                    width="90vw"
                />
            </VideoSection>
            <ActionSection>
                <h3>Hi, if you likes our demo so you can book your seat for our next batch. click this button to book your seat.</h3>
                <ActionButtonSection>
                    <Link to="/contact">
                        <motion.div variants={pathVariantsUPScaling} initial="hidden" animate="visible">
                            <ActionButton>
                                BOOK MY SEAT NOW !
                            </ActionButton>
                        </motion.div>
                    </Link>
                </ActionButtonSection>
            </ActionSection>

        </div>
    )
}

const pathVariantsUPScaling = {
    hidden: {
        scale: 0.98,
    },
    visible: {
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            yoyo: Infinity,
        },
    }
};

const TextIcon = styled.span`
    position: relative;
`;
const TopText = styled.h3`
     font-weight: lighter;
     text-align: center;
     padding-top: 40px;
`;

const ActionButtonSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const ActionButton = styled.button`
    border-radius: 4px;
    background: #DC143C;
    white-space: nowrap;
    padding: 30px 0;
    color: #fff;
    font-size: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 90vw;
    &:hover {
        transition: all 0.3s ease-out;
        background-color: darkred;
    }
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`;
const ActionSection = styled.div`
    padding: 20px;
   
    h3 {
        font-weight: lighter;
        text-align: center;
    }
`;

const VideoSection = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {        
        border: 1px solid black;
    }
    /* video {
        width: 90vw;
        border-radius: 5px;
        object-fit: cover;
    } */
`;

const TopSection = styled.section`
    z-index: 99;
    position: fixed;
    top: 0;
    height: 75px;
    width: 100%;
    background-color: white;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

/*
<VideoSection>
                <video controls>
                    <source src="https://www.youtube.com/watch?v=3aLbX45Uy5w" type="video/mp4" />
                </video>
            </VideoSection>

*/