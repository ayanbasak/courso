import styled from 'styled-components';

export const ContactInfo = styled.div`
color: #696969;//
background-color: white;//
width: 200px;
height: 60px;
/* position: relative; */
position: absolute;
right: 15px;
top: 5px;
border-radius: 5px;
@media screen and (max-width: 400px) {    
    top: 0px;
}
`;
export const ContactIcon = styled.div`
    position: absolute;
    top:15px;
    left:10px;
    @media screen and (max-width: 400px) {    
        top:20px;    
        left:30px;    
    }

`;
export const ContactNumber = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 15px;
    font-weight: bold;
`;
export const ContactTagLine = styled.div`
    position: absolute;
    bottom:10px;
    right: 10px;
    font-size: 15px;
`;
export const Content = styled.div`
    position: relative;
`;
export const LogoStyle = styled.div`
    margin-left: 70px;
    img {
        height: 70px;
        background-color: white;
        padding: 0 8px;
        border-bottom-left-radius: 5%;
        border-bottom-right-radius: 5%;
    }
    @media screen and (max-width: 400px) {
        margin-left: 10px;
        img {
            height: 60px;
            padding: 0 8px;
        }
    }
`;
export const Section = styled.nav`
    flex-grow: 1;
    position: fixed;
    top: 0;
    height: 75px;
    width: 100%;
    z-index: 999;
    background: ${props => props.visible ? 'white' : 'transparent'};
    /* background: red; */
    box-shadow: ${props => props.visible ? 'rgb(38, 57, 77) 0px 20px 30px -10px' : 'none'};
    @media screen and (max-width: 400px) {    
        height: 60px;
    }
`;

