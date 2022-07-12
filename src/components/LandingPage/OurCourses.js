import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

export const OurCourses = (props) => {
    const cardContents = props.text;
    return (
        <Section>
            <TopItem>
                <h2>Our Top Rated Courses</h2>
                <p>Explore our courses and find your perfect program</p>
            </TopItem>

            <CardWrapper>
                <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                    {cardContents.map((cc, i) => (
                        <Paper elevation={3} style={{ margin: '5px 5px' }} key={i}>
                            <Tooltip title={<h1>View This Course</h1>} placement="bottom" arrow>
                                <Grid item xs={12} sm={6} md={6} lg={3}>
                                    <Link to={`course/${cc.courseId}`}>
                                        <CardStyle>
                                            <Card>
                                                <CardActionArea>
                                                    <CardImage>
                                                        <img src={cc.courseThumbnail} alt="course image" />
                                                    </CardImage>
                                                </CardActionArea>
                                                <CardContent>
                                                    <h4>{cc.heading}</h4>
                                                    <CourseRatings>
                                                        <Rating name="read-only" value={cc.rating} readOnly />
                                                    </CourseRatings>
                                                    <EstimatedTime>ESTIMATED TIME</EstimatedTime>
                                                    <EstimatedTimeIs>{cc.extimatedTime}</EstimatedTimeIs>
                                                </CardContent>
                                            </Card>
                                        </CardStyle>
                                    </Link>
                                </Grid>
                            </Tooltip>
                        </Paper>
                    ))}
                </Grid>
            </CardWrapper>
        </Section>
    )
}

const CardContent = styled.div`
    position: relative;
    padding: 0 1rem;
    height: 120px;
    h4 {
        position: absolute;
        top: -7px;
        left: 20px;
        font-weight: lighter;
        font-size: 1.55rem;
    }    
`;
const CourseRatings = styled.div`
   position: absolute;
   top: 38px;   
   margin-left: 2rem;
`;
const EstimatedTime = styled.h5`
    font-weight: bold;
    position: absolute;
    top: 40px;
    left: 21px;
    color: #696969;
`;
const EstimatedTimeIs = styled.h5`
    font-weight: lighter;
    position: absolute;
    top: 60px;
    margin-left: 2rem;
`;

const CardStyle = styled.div`
    width: 320px;
    max-width: 320px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
const CardImage = styled.div`
    img {
        width: 320px;
        height: 180px;
        object-fit: cover;
        :hover{
            transition: all 0.3s;
            transform: scale(1.1);
        }
    }
`;
const TopItem = styled.div`
    position: relative;
    /* background-color: white; */
    margin-left: 10px;
    margin-bottom: 3rem;
    h2 {
        font-weight: lighter;
        text-align: center;
        margin-left: 1rem;
        padding: 1.5rem 0;
    }
    p {
        text-align: center;
        font-weight: lighter;
    }
    @media screen and (max-width: 360px) {
        margin-left: 0;
    }
`;
const CardWrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 4rem;
`;

const Section = styled.section`
    /* background-color: #0A66C2; */
    margin: 6rem 2rem;
    hr {
        margin: 0 6rem;
    }
`;

