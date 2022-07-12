import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'

export const CourseFeatures = (props) => {
    const items = props.text;
    return (
        <Section>
            <Grid container spacing={1} justify='center'>
                {items.map((item, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <Item>
                            <h4>{item.topContent}</h4>
                            <h4>{item.middleContent}</h4>
                            <p>{item.endContent}</p>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}
const Item = styled.div`
    padding: 1rem 4rem;
    border-left: 2px solid darkgray;
    height: 110px;
    h4:nth-child(1) {
        color: #696969;
        margin: 1rem 0;
    }
    h4:nth-child(2) {
        color: black;
        margin: 1rem 0;
    }
    p {
        color: #696969;
        margin: 1rem 0;
    }
    @media screen and (max-width: 600px) {
        height: 80px;
    }
`;
const Section = styled.section`
    margin: 3rem 0;
    padding: 0 4rem;
    /* height: 1500px; */
`;