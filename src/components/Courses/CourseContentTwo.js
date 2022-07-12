import React from 'react';
import styled from 'styled-components';
import CustomAccordion from './Accordion/CustomAccordion';

export const CourseContentTwo = (props) => {
    const content = props.text;
    return (
        <Section>
            <Content>
                <TopContent>
                    <h2>Course Overview</h2>
                    <CourseInfo>What you will learn from our course</CourseInfo>
                </TopContent>
                <BottomContent>
                    <CustomAccordion content={content} />
                </BottomContent>
            </Content>
        </Section>
    )
}

const CourseInfo = styled.h4`
   text-align: center;
   font-weight: lighter;
`;
const TopContent = styled.div`
    height: 80px;
`;
const BottomContent = styled.div`
    margin-top: 5rem;
`;
const Content = styled.div`
  padding: 0 20px;
`;

const Section = styled.section`
    padding-bottom: 30px;
`;

