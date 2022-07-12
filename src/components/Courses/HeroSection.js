import React from 'react';
import styled from 'styled-components';
import { landingPageTop } from '../../images';
import { Button } from '../globalStyle';
import { Link } from 'react-router-dom';

export const HeroSection = (props) => {
    const content = props.text;
    return (
        <Section>
            <SectionContent>
                <p>{content.courseType}</p>
                <h2>{content.courseName}</h2>
                <p>{content.courseTagLine}</p>
                <LongText>{content.courseDetails}</LongText>

                <ButtonWrapper>
                    <Link to="/contact">
                        <Button primary border>contact us</Button>
                    </Link>
                    <div />
                    <a href={content.coursePdf} download={content.courseName} target='_blank'>
                        <Button primary border>Download curriculum</Button>
                    </a>
                </ButtonWrapper>
            </SectionContent>
        </Section>
    )
};
const LongText = styled.p`
     @media screen and (max-width: 400px) {
       max-width: 350px;
    }
`;

const ButtonWrapper = styled.div`
   margin-top: 2rem;
   margin-bottom: 2rem;
   display: flex;
   flex-direction: row;
   div{
       width:20px;
   }
`;

const SectionContent = styled.div`
    margin-top: 9rem;
    background-color: rgba(70,130,180, 0.7);
    color: white;
    top: 0;
    left: 0;
    width: 100vw;    
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        font-weight: lighter;
        font-size: 2.5rem;
    }
    p {
        font-size: 1.5rem;
        width: 50rem;
    }
    
    @media screen and (max-width: 360px) {
        h2 {
            font-size: 3rem;
        }
        p {
            font-size: 2rem;
        }
    }
    @media screen and (min-width: 600px) {
        margin-top: 7.5rem;
    }
`;
const Section = styled.section`       
    text-align: center;
    background-image: url(${landingPageTop}); 
    background-position: center;
    height: 550px;
    width: 100vw;    
`;





