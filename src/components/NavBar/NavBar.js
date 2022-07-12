import React, { useState, useEffect } from 'react';
import { logoUp } from '../../images';
import { BiPhoneCall } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Section, LogoStyle, Content, ContactTagLine, ContactNumber, ContactIcon, ContactInfo } from './NavBar.styles'
import Tooltip from '@material-ui/core/Tooltip';

export const NavBar = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }
    return (
        <Section visible={visible}>
            <Content>
                <LogoStyle>
                    <Link to="/">
                        <Tooltip title={<h1>Demo Logo</h1>} placement="bottom" arrow>
                            <img src={logoUp} alt="Courso logo" data-aos='slide-down' />
                        </Tooltip>
                    </Link>
                </LogoStyle>
                <a href="tel:+91 9851571961">
                    <Tooltip title={<h1>Click here to call</h1>} placement="bottom" arrow>
                        <ContactInfo visible={visible} data-aos='slide-down'>
                            <ContactIcon>
                                <BiPhoneCall fontSize='3.5rem' />
                            </ContactIcon>
                            <ContactNumber>
                                +91 9851571961
                            </ContactNumber>
                            <ContactTagLine>
                                Start Learning ...
                            </ContactTagLine>
                        </ContactInfo>
                    </Tooltip>
                </a>
            </Content>
        </Section>
    )
}

