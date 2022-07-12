import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ActionSection = () => {
    return (
        <Section>
            <h3>Limited time offer, you can book your seat for our next batch. click this button to book your seat.</h3>
            <ActionButtonSection>
                <Link to="/contact">
                    <motion.div variants={pathVariantsUPScaling} initial="hidden" animate="visible">
                        <ActionButton>
                            BOOK MY SEAT NOW !
                        </ActionButton>
                    </motion.div>
                </Link>
            </ActionButtonSection>
        </Section>
    )
}

const pathVariantsUPScaling = {
    hidden: {
        scale: 0.98,
    },
    visible: {
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            yoyo: Infinity,
        },
    }
};


const ActionButtonSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const ActionButton = styled.button`
    border-radius: 4px;
    background: #DC143C;
    white-space: nowrap;
    padding: 30px 0;
    color: #fff;
    font-size: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 90vw;
    &:hover {
        transition: all 0.3s ease-out;
        background-color: darkred;
    }
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`;
const Section = styled.div`
    padding: 20px;
   
    h3 {
        font-weight: lighter;
        text-align: center;
    }
`;






