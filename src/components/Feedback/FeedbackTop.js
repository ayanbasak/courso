import React from 'react';
import { feedbackTop } from '../../images';
import { Button } from '../globalStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FeedbackTop = () => {
    return (
        <Section>
            <img src={feedbackTop} alt="image" />
            <SectionContent>
                <h1>View our students feedback</h1>
                <p></p>
                <ButtonWrapper>
                    <Link to='/'>
                        <Button primary border>Back to Home</Button>
                    </Link>
                </ButtonWrapper>
            </SectionContent>
        </Section>
    )
}
const ButtonWrapper = styled.div`
   margin-bottom: 2rem;
   div{
       width:20px;
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
const SectionContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 550px;
    position: absolute; 
    background-color: rgba(70,130,180, 0.4);
    color: white;
    top: 0;
    left: 0;
    width: 100vw;    
    /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
    h1{
        font-size: 3rem;
    }
    p {
        font-size: 1.5rem;
    }
    h1, p, div { 
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: lighter;
    }
    @media screen and (max-width: 360px) {        
        p {
            font-size: 2rem;
        }
    }
`;