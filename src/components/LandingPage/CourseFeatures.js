import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const CourseFeatures = (props) => {
    const items = props.text;
    return (
        <Section>
            <Grid container direction="row" justify="space-around" alignItems="center">
                {items.map((item, index) => (
                    <Grid item xs={12} md={6} lg={3} key={index} style={{ flexBasis: 'auto' }}>
                        <Items>
                            {/*
                        <LeftItem>
                                <h3>{item.heading}</h3>
                            </LeftItem>
                        */}
                            <RightItem>
                                <p>{item.content}</p>
                            </RightItem>
                        </Items>
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}

const LeftItem = styled.div`
    /* background-color: #0A66C2; */
    /* clip-path: polygon(0 5%, 87% 5%, 100% 50%, 86% 95%, 0 95%, 0 52%); */
    color: black;
    width: 150px;
    margin: 15px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h3 {
        font-weight: lighter;
    }
    @media screen and (max-width: 600px) {
        margin: 5px 2px;
    }
`;
const RightItem = styled.div`
     margin: 0 15px;
     display: flex;
     align-items: center;
     text-align: left;
     padding-top: 10px;
     @media screen and (max-width: 600px) {
        p {
            font-size: 1.75rem;
        }
    }
`;

const Items = styled.div`
    color: black;
    height: 100px;
    display: flex;
    padding: 0 20px; 
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    width: 320px;
    @media screen and (min-width: 1280px) {
        width: 300px;
    }
    @media screen and (max-width: 600px) {
        height: 80px;
    }
`;

const Section = styled.section`
    /* background-color: #030393; */
    width: 100vw;
`;

