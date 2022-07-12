import React from 'react';
import styled from 'styled-components';
import { Button } from '../globalStyle';

export const HeroContent = (props) => {
    // console.log("  --  " + props.courseName);
    return (
        <Section bg={props.bg} >
            <LeftContent>
                <h2>{props.leftText}</h2>
            </LeftContent>
            <RightContent>
                <a href={props.text} download='Java Backend Developer Program' target='_blank'>
                    <Button primary>DOWNLOAD SYLLABUS</Button>
                </a>
            </RightContent>
        </Section>
    )
}
const LeftContent = styled.div`
    h2{
        padding: 40px 30px;
    }
`;
const RightContent = styled.div`
    position: absolute;
    right:0;
    top: 30px;
    margin-right: 30px;
    height:80px;
`;
const Section = styled.section`
    position: relative;
    height: 110px;
    background-color: ${props => props.bg ? props.bg : 'none'};
`;




