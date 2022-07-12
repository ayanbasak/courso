import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Testimonials = (props) => {
    const contents = props.text;
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Section>
            <TopSection>
                <h2> Our Students review</h2>
                <p>Courso has all the critical factors to deliver real results</p>
            </TopSection>
            <Wrapper>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={6000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {contents.map((cc, i) => (
                        <div key={i} style={{ height: '370px', display: 'flex', justifyContent: 'center' }}>
                            <Paper elevation={3} style={{ margin: '5px 10px', borderTop: '2px solid ' + cc.borderTopColor, boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }} >
                                <Item borderTop={cc.borderTopColor}>
                                    <ItemTopSection>
                                        <img src={cc.image} alt="face" />
                                        <h3>{cc.name}</h3>
                                    </ItemTopSection>
                                    <p>{cc.content}</p>

                                    {cc.content.length > 400 ? null : (
                                        <ItemBottomSection>
                                            <h5>NOW</h5>
                                            <h5>{cc.jobRole}</h5>
                                        </ItemBottomSection>
                                    )}
                                </Item>
                            </Paper>
                        </div>
                    ))}
                </Carousel>

            </Wrapper>
        </Section>
    )
}

const TopSection = styled.div`
    text-align: center;
    margin:50px 0;
    h2 {
        font-weight: lighter;
    }
`;
const ItemTopSection = styled.div`
    position: relative;
    h3 {
        font-weight: lighter;
        position: absolute;
        top: 25px;
        right: 20px;
        /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
    }
    img {
        height: 70px;
        width: 70px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid white;
        position: absolute;
        top: 5px;
        left: 20px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
`;
const ItemBottomSection = styled.div`
    margin-top: 40px;
    line-height: 0px;
`;
const Item = styled.div`
    /* border: 1px solid ${props => props.borderTop};
    border-radius: 5px; */
    text-align: center;
    height: 400px;
    width: 300px;
    padding: 1rem;
    /* background-color: red; */
    /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
   p {
       margin-top: 100px;
       padding: 0 2.5rem;
   }
   @media screen and (max-width: 600px) {
        height: 250px;
    }
`;
const Wrapper = styled.div`
    margin-top: 1rem;

    .react-multiple-carousel__arrow{
        background-color: #0A66C2;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;        
        border-radius: 0;
        height: 70px;
        width: 40px;
        @media screen and (max-width: 400px) {
            opacity: 0.6;
        }
    }
    li {
        /* background-color: red; */
        height: 350px;
    }
    li button{
       margin-top: 340px;
       width: 50px;
       height: 5px;
       border: 0;
       border-radius: 3px;
    }
    .react-multi-carousel-dot--active button {
        background: #0A66C2;
    }
    .react-multi-carousel-list {
        height: 450px;
    }
`;
const Section = styled.section`
    margin-bottom: 5rem;
`;

