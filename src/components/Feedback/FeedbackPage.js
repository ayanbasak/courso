import React from 'react';
import { FeedbackTop } from './FeedbackTop';
import { StudentFeedbacks } from './StudentFeedbacks';
import Breadcrumb from '../Others/Breadcrumb';
import { texts } from '../../data/feedbackPageData'

export default function FeedbackPage() {

    return (
        <div>
            <FeedbackTop />
            {texts.map((cc, i) => (
                <StudentFeedbacks order={i % 2} content={cc} key={i} />
            ))}

            <Breadcrumb text="students feedback" />
        </div>
    )
}
