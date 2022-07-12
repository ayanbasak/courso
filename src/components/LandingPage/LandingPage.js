import React from "react";
import { CorporateTraining } from './CorporateTraining';
import { CourseFeatures } from './CourseFeatures';
import { CourseFeaturesTwo } from './CourseFeaturesTwo';
import { LandingPageTop } from './LandingPageTop';
import { OurCourses } from './OurCourses';
import { GivingFeedback } from './GivingFeedback';
import { Testimonials } from './Testimonials';
import { texts } from '../../data/landingPageData'

const LandingPage = () => {

    return (
        <div>
            <LandingPageTop text={texts.landingPageTop} />
            <CourseFeatures text={texts.courseFeatures} />
            {/*  <CourseFeaturesTwo text={texts.courseFeaturesTwo} />  */}
            <GivingFeedback />
            <OurCourses text={texts.ourCourses} />
            <CorporateTraining text={texts.corporateTraining} />
            <Testimonials text={texts.testimonials} />
        </div>
    )
};
export default LandingPage;