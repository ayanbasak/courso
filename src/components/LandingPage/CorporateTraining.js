import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { landingPageTop, corporateTraining } from '../../images';
import { Button } from '../globalStyle';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';

export const CorporateTraining = (props) => {
    const content = props.text;

    return (
        <Section>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <LeftPart>
                        {/* insert svg here */}
                        {/*  <img src={corporateTraining} alt="corporate training" height='200px' />  */}
                        <Particles height='250px' width={'100vw'} />

                    </LeftPart>
                </Grid>
                <Grid item xs={12} md={6}>
                    <RightPart>
                        <h3>{content.heading}</h3>
                        <p>{content.content}</p>
                        <Link to="/contact">
                            <Button>Contact Us</Button>
                        </Link>
                    </RightPart>
                </Grid>
            </Grid>
        </Section>
    )
}

const LeftPart = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const RightPart = styled.div`
    height: 200px;
    text-align: center;
    padding: 60px;
    color: white;
    h3 {
        font-weight: lighter;
    }
`;

const Section = styled.section`   
    margin: 15px 0;    
    /* background-image: url(${landingPageTop});  */
    /* background-color: rgba(201, 76, 76, 0.4); */
    background-color: #0A66C2;
    object-fit: cover;
`;