import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { heroVideo } from '../../images';

const VideoSection = () => {

    return (
        <Section>
            <ReactPlayer
                url={heroVideo}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
            <Overlay />
        </Section>
    );
};

export default VideoSection;

const Section = styled.section`
    width: 100%;
    height: 85vh;
    position: relative;    
    video {
        object-fit: cover;
    }
`;
const Overlay = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     /* background-color: rgba(0, 0, 0, 0.3); */
`;

