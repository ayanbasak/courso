import React from 'react';
import styled from 'styled-components';

export const CourseContent = (props) => {
    const content = props.text;
    return (
        <Section>
            <LeftContent>
                <h2>{content.heading}</h2>
                <p>{content.topContent}</p>
                <p>{content.bottomContent}</p>
            </LeftContent>
            <RightContent>
                <img src={content.image} alt='side image' />
            </RightContent>
        </Section>
    )
}
const LeftContent = styled.div`
  width: 85vw;
  padding: 0 30px;
  margin-right: 30px;
  @media screen and (min-width: 600px) {
        width: 50vw;
  }
`;
const RightContent = styled.div`
   position: absolute; 
   height: 310px;
   top:0;
   right:2%;
   img {
       height: 310px;
       width:500px;
       object-fit: cover;       
       padding: 30px 0;
       float: right;
       clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
   }
   @media screen and (max-width: 1000px) {
        position: static; 
   }
`;
const Section = styled.section`
    position: relative; 
    padding-bottom: 30px;
    height: 350px;
    @media screen and (max-width: 1000px) {
        height: 600px;
   }
`;