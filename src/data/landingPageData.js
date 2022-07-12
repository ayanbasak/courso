import { AiOutlineBulb, AiOutlineClockCircle } from "react-icons/ai";
import { GiGymBag } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { face01, face02, face03, face04, face05, javaBackendDeveloperProgram } from '../images';

export const texts = {
    landingPageTop: {
        heading: 'Let’s Up your skill anywhere, anytime.',
        topContent: `Become Job-Ready in ${new Date().getFullYear()} with Live Project Training on Java.`,
        middleContent: 'Learn in online from anywhere in the world',
        bottomContent: 'Learn from 10+ years of experienced industry experts'
    },
    courseFeatures: [
        {
            content: 'Beginner to Advance Level Class'
        },        
        {
            content: 'Hands On Training'
        },
        {
            content: 'Practical Assignments'
        },
        {
            content: 'Live Projects'
        },
        {
            content: 'Lifetime Course Material Access'
        },
        {
            content: 'Online Classes'
        },
        {
            content: 'Interview Preparation'
        },
        {
            content: 'Affordable Course Fees'
        },
        {
            content: 'Learn from Industry Experts'
        },
    ],
    courseFeaturesTwo: {
        contents: [
            "Beginner & Advanced level Classes,",
            "Learn in online from anywhere in the world,",
            "Hands-On Learning,",
            "Students get Live Project to practice,",
            "Best Practice for interview Preparation Techniques in Java,",
            "Lifetime Access for Study Materials, Videos & Top MNC Interview Question,",
            "Affordable Fees with Best curriculum Designed by Industrial Java Experts.",
            "Java Fast Track course available with best affordable Fees,",
            "Delivered by 10+ years of experienced Java Experts,",
            "In a Class, Batch Size will be less Students and one-to-one Interaction.",
        ],
        cardContents: [
            {
                icon: <GiGymBag fontSize='5rem' />,
                heading: 'Get real employable skills',
                content: 'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.',
                borderTopColor: 'red',
            },
            {
                icon: <AiOutlineBulb fontSize='5rem' />,
                heading: 'Project-based, active learning',
                content: 'Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.',
                borderTopColor: 'green',
            },
            {
                icon: <AiOutlineClockCircle fontSize='5rem' />,
                heading: 'Learn on your schedule',
                content: 'Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week.',
                borderTopColor: 'blue',
            },
            {
                icon: <FaChalkboardTeacher fontSize='5rem' />,
                heading: 'The help you need, when you need it',
                content: 'Reach out to our mentors & have your coding questions answered quickly so you can keep learning.',
                borderTopColor: 'green',
            }
        ]
    },
    ourCourses: [
        {
            courseId: '1',
            heading: 'Java Backend Developer Program',
            rating: 4,
            extimatedTime: '2 months at 8 hrs/week',
            courseThumbnail: javaBackendDeveloperProgram
        }
    ],
    corporateTraining: {
        heading: 'Corporate Training',
        content: 'If you are willing to give an Emerging technology experience to your employees, we are here to help you!'
    },
    testimonials: [
        {
            name: 'John Smith',
            content: 'The curriculum was aligned with what I wanted to study. The assignments are specific to the industry I’m in. I was able to develop new language translation tools for my company.',
            image: face01,
            jobRole: 'Java Developer',
            joinedIn: 'Raytheon',
            borderTopColor: 'red',
        },
        {
            name: 'William James',
            content: 'Reality Hard-working on trainings , All example was real time example it will be helpful in private companies to work.',
            image: face02,
            jobRole: 'Java Developer',
            joinedIn: 'Comcast',
            borderTopColor: 'blue',
        },
        {
            name: 'Wilson ...',
            content: 'Hi, My name is Phongveth LUANGISONGKHAM, I have been working for Lao Securities Exchange(LSX) since 2010 in Lao P.D.R, this course is very useful and improve my skill and knowledge a lot, Sourav sir was a very engaging trainer and covered a range of topics which appealed to everyone and He has a lot of experences with an industrial software development company, moreover, the training course fee is a reasonable price.',
            image: face03,
            jobRole: 'Java Developer',
            joinedIn: 'Panera Bread',
            borderTopColor: 'green',
        },

        {
            name: 'Thompson ...',
            content: 'The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal.',
            image: face04,
            jobRole: 'Full Stack Developer',
            joinedIn: 'Raytheon',
            borderTopColor: 'red',
        },
        {
            name: 'Lewis ...',
            content: 'Thanks a lot for improving my skills! This course is highly recommended for all the Java/JavaEE developers. It includes all the latest technologies like Spring Boot, Rest services,  Microservices, Docker, kubernetes etc. The trainer is extremely knowledgeable and explains concept with proper real life project and example. The projects are unique and interesting and it will definitely help to implement the required solution on our day to day work life.',
            image: face05,
            jobRole: 'Java Developer',
            joinedIn: '',
            borderTopColor: 'blue',
        },
        /*
        
        {
            name: 'Jesse',
            content: 'The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal.',
            image: face1,
            jobRole: 'Java Developer',
            joinedIn: 'Raytheon',
            borderTopColor: 'red',
        },
        {
            name: 'Sundar',
            content: 'The curriculum was aligned with what I wanted to study. The assignments are specific to the industry I’m in. I was able to develop new language translation tools for my company.',
            image: face2,
            jobRole: 'Java Backend Developer',
            joinedIn: 'Comcast',
            borderTopColor: 'blue',
        },
        {
            name: 'David',
            content: 'One of the things that attracted me to Courso was a curriculum developed by people that worked for some of the biggest and most successful tech companies.',
            image: face3,
            jobRole: 'Full Stack Developer',
            joinedIn: 'Panera Bread',
            borderTopColor: 'green',
        },

        {
            name: 'Jesse2',
            content: 'The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal.',
            image: face1,
            jobRole: 'Java Developer',
            joinedIn: 'Raytheon',
            borderTopColor: 'red',
        },        
        {
            name: 'Sundar2',
            content: 'The curriculum was aligned with what I wanted to study. The assignments are specific to the industry I’m in. I was able to develop new language translation tools for my company.',
            image: face2,
            jobRole: 'Java Backend Developer',
            joinedIn: 'Comcast',
            borderTopColor: 'blue',
        },
        {
            name: 'David2',
            content: 'One of the things that attracted me to Courso was a curriculum developed by people that worked for some of the biggest and most successful tech companies.',
            image: face3,
            jobRole: 'Full Stack Developer',
            joinedIn: 'Panera Bread',
            borderTopColor: 'green',
        }
        */
    ]
}