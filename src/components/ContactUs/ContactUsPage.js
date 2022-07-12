import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { courseTexts } from '../../data/coursePageData';
import { ContactUsTopSection } from './ContactUsTopSection';
import Breadcrumb from '../Others/Breadcrumb';
import { IoIosContact } from 'react-icons/io';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { Button } from '../globalStyle';

export default function ContactUsPage() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState('');
    const [user, setUser] = useState({
        name: '',
        email: '',
        contactNo: '',
        choosenCourse: 'none',
        address: '',
        message: ''
    });

    const onChange = (e) => {
        const { value, name, type, checked } = e.target;

        setUser((state) => ({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setLoadingStatus('loading');

        // console.log('0--->  ', process.env);
        // console.log('1--->  ', process.env.REACT_APP_EMAILJS_SERVICE_ID);
        // console.log('2--->  ', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
        // console.log('3--->  ', process.env.REACT_APP_EMAILJS_USER_ID);
        // console.log('--->  ', e.target);

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                setLoadingStatus('success');
            }, (error) => {
                setLoadingStatus('error');
            });


    }
    const closeLoader = () => {
        setLoadingStatus('');
        setLoading(false);
    }

    const loader = (
        <motion.div className={classes.svgRoot} variants={modal}>
            <div>
                <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" className={classes.loadingSvg} stroke="currentColor">
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)" strokeWidth="2">
                            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                            <path d="M36 18c0-9.94-8.06-18-18-18">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="1s"
                                    repeatCount="indefinite" />
                            </path>
                        </g>
                    </g>
                </svg>
                <p className={classes.loadingText}>
                    Loading...
                </p>
            </div>
        </motion.div>
    );

    const successMessage = (
        <motion.div className={classes.svgRoot} variants={modal}>
            <div>
                <AiOutlineCheckCircle fontSize='5rem' color='green' />
            </div>
            <div>
                <Lighth3>Your informations are send</Lighth3>
            </div>
            <div>
                <Button onClick={closeLoader} >close</Button>
            </div>
        </motion.div>
    );

    const errorMessage = (
        <motion.div className={classes.svgRoot} variants={modal}>
            <div>
                <MdError fontSize='5rem' color='red' />
            </div>
            <div>
                <Lighth3>This message can't be sent right now. Please try again later</Lighth3>
            </div>
            <div>
                <Button onClick={closeLoader} >close</Button>
            </div>
        </motion.div>
    );

    return (
        <div>
            <ContactUsTopSection />
            <MainSection>

                <FormSection>
                    <TopSection>
                        <div><IoIosContact fontSize='80px' /></div>
                        <h2>Please enter your informations</h2>
                        <p>Please provide your information and our team will contact you</p>
                    </TopSection>

                    <form onSubmit={onSubmit}>
                        <FormBox>
                            <InputLabel>Name</InputLabel>
                            <InputBox
                                onChange={onChange}
                                name="name"
                                value={user.name}
                                type='text'
                                placeholder='your name'
                            />
                            <InputLabel>Email</InputLabel>
                            <InputBox
                                onChange={onChange}
                                name="email"
                                value={user.email}
                                type='text'
                                placeholder='your email'
                            />
                            <InputLabel>Contact Number</InputLabel>
                            <InputBox
                                onChange={onChange}
                                name="contactNo"
                                value={user.contactNo}
                                type='number'
                                placeholder='your contact number'
                            />
                            <InputLabel>Your Address</InputLabel>
                            <InputBox
                                onChange={onChange}
                                name="address"
                                value={user.address}
                                type='text'
                                placeholder='your address'
                            />
                            <FormControl variant="outlined" style={{ width: '103%' }}>
                                <InputLabel>Choose Course</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={user.choosenCourse}
                                    name='choosenCourse'
                                    onChange={onChange}
                                    style={{ height: '40px', border: '1px solid black' }}
                                >
                                    <MenuItem value="none">
                                        <p>None</p>
                                    </MenuItem>
                                    {courseTexts.map((ct, i) => (
                                        <MenuItem value={ct.heroSection.courseName} key={i}>
                                            <p>{ct.heroSection.courseName}</p>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <InputLabel>Your Message</InputLabel>
                            <Textarea
                                onChange={onChange}
                                name="message"
                                value={user.message}
                                type='text'
                                placeholder='your message to us'
                            />
                        </FormBox>
                        <SubmitSection>
                            <ButtonComponent>
                                <div class="sub-main">
                                    <button class="button-two"><span>Submit</span></button>
                                </div>
                            </ButtonComponent>
                        </SubmitSection>
                    </form>
                </FormSection>
            </MainSection>
            <Breadcrumb text="contact us" />

            {/* loader part */}
            <AnimatePresence exitBeforeEnter>
                {loading && (
                    <motion.div className={classes.root}
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {loadingStatus === 'loading' && loader}
                        {loadingStatus === 'success' && successMessage}
                        {loadingStatus === 'error' && errorMessage}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

/* // loading    success   error |  loadingStatus*/
const Lighth3 = styled.h3`
    font-weight: lighter;
`;
const Textarea = styled.textarea`
    width: 100%;
    height: 200px;
    font-size: 15px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;

    :focus{
        border: 2px solid lightblue;
    }
`;

const MainSection = styled.div`
    margin-top: 80px;
    border-radius: 10px;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FormSection = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 2rem 0;
    padding: 20px 20px;
    @media screen and (min-width: 800px) {        
        width: 750px;  
    }
    @media screen and (max-width: 500px) {        
        width: 100vw;        
        border:none;
    }
`;
const FormBox = styled.div`    
    margin:2rem;
    margin-top: 4rem;
    margin-right: 4rem;
    @media screen and (min-width: 800px) {
        width: 700px;
    }
`;
const SubmitSection = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;
const InputLabel = styled.p`
   margin-top: 15px;
   
`;
const TopSection = styled.div`
    text-align: center;
    padding: 2rem 0;
    background-color: #0A66C2;
    color: #fff;
    h2 {
        font-weight: lighter;
    }
    p {
        font-weight: lighter;
    }
`;
const InputBox = styled.input`
    width: 100%;
    height: 35px;
    font-size: 15px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 10px;

    :focus{
        border: 2px solid lightblue;
    }
`;

const ButtonComponent = styled.div`
/* background-color: red; */
 width:100%;
 padding: 20px 0;
 margin-left: 2rem;
 margin-right: 1rem;
.button-two {
  color:#fff;
  text-align: center;
  padding: 20px;  
  text-align: center;
  cursor: pointer;
  background-color: #0A66C2;  
  border: none;
  padding: 15px;
  width:100%;
  transition: all 0.5s;
}

.button-two span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button-two span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button-two:hover span {
  padding-right: 25px;
}

.button-two:hover span:after {
  opacity: 1;
  right: 0;
}
`;

// framer motion
const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    },
}

// maierial ui css

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 1
    },
    errorIcon: {
        color: 'red',
        fontSize: '5rem'
    },
    svgRoot: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '40px 20px',
        background: 'white',
        borderRadius: '10px',
        textAlign: 'center',
        position: 'relative'
    },
    loadingText: {
        color: '#444',
        fontWeight: 'bold'
    },
    loadingSvg: {
        height: '5rem',
        color: '#0A66C2'
    },
    AiFillCloseCircle: {
        color: 'red',
        position: 'absolute',
        right: 30
    }
    // appBar: {
    //     position: 'fixed',
    //     top: 0,
    //     width: '100%',
    //     zIndex: 999,
    //     backgroundColor: 'white'
    // },
}));

