import React, { useEffect, useState } from 'react';
import { CourseContent } from './CourseContent';
import { CourseContentTwo } from './CourseContentTwo';
import { CourseFeatures } from './CourseFeatures';
import { HeroContent } from './HeroContent';
import { HeroSection } from './HeroSection';
import Breadcrumb from '../Others/Breadcrumb';
import { courseTexts } from '../../data/coursePageData';
import { useParams } from "react-router-dom";
import { ActionSection } from './ActionSection';

const CoursePage = () => {
    const [texts, setTexts] = useState(courseTexts[0]);
    let { courseId } = useParams();

    useEffect(() => {
        findCurrentCourse();
    }, [courseId])

    const findCurrentCourse = () => {
        const currentCourse = courseTexts.find(course => course.courseId === parseInt(courseId));
        setTexts(currentCourse);
    }

    return (
        <div>
            <HeroSection text={texts.heroSection} />
            <CourseFeatures text={texts.courseFeatures} />
            <HeroContent bg='white' leftText="Syllabus" text={texts.syllabus} />
            <CourseContent text={texts.courseContent} />
            <CourseContentTwo text={texts.courseContentTwo} />
            <HeroContent leftText="" text={texts.syllabus} courseName={texts.heroSection.courseName} />
            <ActionSection />
            <Breadcrumb text={texts.breadcrumb} />
        </div>
    )
}

export default CoursePage;
