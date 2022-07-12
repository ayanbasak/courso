// CustomAccordion
import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

export default function CustomAccordion({ content }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{ width: '100%' }} >
            {content.map((con, index) => {
                return (
                    <div key={index}>
                        <Accordion
                            expanded={expanded === ('panel' + index)}
                            onChange={handleChange('panel' + index)}
                            style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}>
                            <AccordionSummary
                                expandIcon={<IoIosArrowDown fontSize='2rem' />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                style={{ borderLeft: '4px solid #0A66C2', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
                            >
                                <AccordionHead>
                                    <ListCounter>{index + 1}</ListCounter>{con.name}
                                </AccordionHead>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AccordionUL>
                                    {con.content.map((con, i) => (
                                        <List key={i}>
                                            <ListCounter>{i + 1}</ListCounter>
                                            <ListContent> {con} </ListContent>
                                        </List>
                                    ))}
                                </AccordionUL>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                );
            })}
        </div>
    );
}

const AccordionHead = styled.h4`
    font-weight: lighter;
    line-height: 25px; 
`;
const ListContent = styled.p`
    display: inline;
    line-height: 25px; 
    /* margin: 15px 0; */
    /* position: absolute;   
    left:0;
    width:70vw; */
    

`;
const ListCounter = styled.span`
    display: inline;
    padding: 5px 10px;
    border-radius: 50%;
    background-color: #0A66C2;
    color: white;
    margin-right: 2rem;
`;
const AccordionUL = styled.ul`
    border-left: 2px solid #0A66C2;
    padding-left: 2rem;
`;
const List = styled.li`
    padding: 0.5rem;
    padding-left: 0;
    list-style: none;
    line-height: 20px;
    /* position: relative; */
`;