import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheckCircle } from "react-icons/ai";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { courseFeatureSideImg } from '../../images'

export const CourseFeaturesTwo = (props) => {
    const contents = props.text.contents;
    const cardContents = props.text.cardContents;
    return (
        <Section>
            <TopItem>
                <h2>Learn From Experts, Practice On Projects & Get Placed in IT Company</h2>
                <ContentItemUl>
                    {contents.map((content, index) => (
                        <ContentItemLi key={index}>
                            <AiOutlineCheckCircle color='darkblue' style={{ marginRight: '10px' }} />
                            {"  " + content}
                        </ContentItemLi>
                    ))}
                </ContentItemUl>
                <Img>
                    <img src={courseFeatureSideImg} alt='side image' />
                </Img>
            </TopItem>

            <CardWrapper>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    {cardContents.map((cc, i) => (
                        <Paper elevation={3} style={{ margin: '5px 5px' }} key={i}>
                            <Grid item xs={12} md={6} lg={6} spacing={1}>
                                <Item borderTop={cc.borderTopColor}>
                                    <div>{cc.icon}</div>
                                    <h3>{cc.heading}</h3>
                                    <p>{cc.content}</p>
                                </Item>
                            </Grid>
                        </Paper>
                    ))}
                </Grid>
            </CardWrapper>
        </Section>
    )
}

const Img = styled.div`
    position: absolute; 
    top:0;
    right:2%;
    img {
        height: 310px;
        width:500px;
        object-fit: cover;
        clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;
const TopItem = styled.div`
    position: relative;
    margin-left: 10px;
    margin-bottom: 2.5rem;
    h2 {
        font-weight: lighter;
        text-align: left;
        margin-left: 1rem;
        padding: 1.5rem 0;
    }
    @media screen and (max-width: 360px) {
        margin-left: 0;
    }
`;
const ContentItemLi = styled.li`
    margin: 5px;
    font-size: 1.5rem;
    @media screen and (max-width: 360px) {
        margin-left: 0;
    }
`;
const ContentItemUl = styled.ul`
    list-style-type: none;
`;
const CardWrapper = styled.div`
    margin-top: 6rem;
    margin-bottom: 4rem;
`;
const Item = styled.div`
    border-top: 5px solid ${props => props.borderTop};
    border-radius: 5px;
    text-align: center;
    height: 250px;
    width: 300px;
    padding: 1rem;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    position: relative;
    @media screen and (max-width: 600px) {
        height: 200px;
    }
    /* div {
        font-size: 3rem;
        color: ${props => props.borderTop};
        margin-top: 20px;
    } */
    div {
        font-size: 2.5rem;
        color: white;        
        background-color: #0A66C2;
        width: 170px;
        padding: 15px 0;
        border-radius: 10px;
        position: absolute;
        top: -5px;
        left: 70px;
        margin-top: 1rem;
    }
    h3 {
        margin-top: 110px;
        font-weight: lighter;
    }
    p {
        padding:0 2.5rem;
    }
`;

const Section = styled.section`
    margin-top: 5rem;
`;