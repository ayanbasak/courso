import React from 'react';
import styled from 'styled-components';
import { landingPageTop } from '../../images';
import VideoSection from '../Others/VideoSection';
import { Button } from '../globalStyle';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

export const LandingPageTop = (props) => {
    const content = props.text;
    return (
        <Section>
            {/* <img src={landingPageTop} alt="image" /> */}
            <VideoSection />
            <SectionContent>
                <h2>
                    <Typed
                        strings={[content.heading]}
                        typeSpeed={50}
                        backSpeed={20}
                        loop
                    />
                </h2>
                <p>{content.topContent}</p>
                <p>{content.middleContent}</p>
                <p>{content.bottomContent}</p>

                <ButtonWrapper>
                    <Link to="/viewdemo">
                        <Button primary border>view demo</Button>
                    </Link>
                    <div />
                    <Link to="/course/1">
                        <Button primary border >View course</Button>
                    </Link>
                </ButtonWrapper>
            </SectionContent>
        </Section>
    )
};
//  /course/1

const ButtonWrapper = styled.div`
   margin-bottom: 2rem;
   div{
       width:20px;
   }
`;

const SectionContent = styled.div`
    margin-top: 20rem;
    position: absolute; 
    background-color: rgba(70,130,180, 0.5);
    color: white;
    top: 0;
    left: 0;
    width: 100vw;    
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    h2{
        font-weight: lighter;
        font-size: 2.5rem;
    }
    p {
        font-size: 1.5rem;
    }
    h2, p, div { 
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-width: 960px) {
        width: 50vw;
    }
    @media screen and (max-width: 360px) {
        h2 {
            font-size: 3rem;
        }
        p {
            font-size: 2rem;
        }
    }
`;
const Section = styled.section`
    position: relative;    
    text-align: center;
    img {
        height: 550px;
        width: 100vw;
        object-fit: cover;        
    }
`;