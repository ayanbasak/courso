import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Button } from '../globalStyle';
import { Link } from 'react-router-dom';
import { texts } from '../../data/aboutUs'
export const AboutUs = () => {
    return (
        <Section>
            <hr />
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <LeftPart>
                        <h3>About us</h3>
                        <p>{texts.content}</p>
                    </LeftPart>
                </Grid>
                <Grid item xs={12} md={6}>
                    <RightPart>
                        <Link to="/contact">
                            <Button primary>Contact Us</Button>
                        </Link>
                    </RightPart>
                </Grid>
            </Grid>
            <br />
            <Copyright>
                Copyright © {new Date().getFullYear()} Courso
            </Copyright>
        </Section>
    )
}
const Copyright = styled.p`
    text-align: center;    
    padding-bottom: 10px;
    margin-bottom: 0;
`;

const LeftPart = styled.div`
    height: 200px;
    text-align: center;
    padding:2rem;
    h3 {
        font-weight: lighter;
    }
    @media screen and (max-width: 440px) {
        height: 260px;
    }
`;
const RightPart = styled.div`  
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
        height: 30px;
    }
`;
const Section = styled.section`
    color: #696969;
    margin-top: 15px;
    hr {
        margin:0 50px ;
    }
`;