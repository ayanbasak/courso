import React, { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Loader } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from './components/globalStyle';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { NavBar } from "./components/NavBar/NavBar";
import { Test } from "./Testing/Test";

const LandingPage = lazy(() => import("./components/LandingPage/LandingPage"));
const CoursePage = lazy(() => import("./components/Courses/CoursePage"));
const ContactUsPage = lazy(() => import("./components/ContactUs/ContactUsPage"));
const FeedbackPage = lazy(() => import("./components/Feedback/FeedbackPage"));
const ViewDemo = lazy(() => import("./components/ViewDemo/ViewDemo"));

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router basename="/">
      <div style={{ backgroundColor: '#F3F8FF' }}>
        <GlobalStyle />
        <ScrollToTop />
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/course/:courseId" component={CoursePage} />
            <Route exact path="/contact" component={ContactUsPage} />
            <Route exact path="/feedback" component={FeedbackPage} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/viewdemo" component={ViewDemo} />
          </Switch>
        </Suspense>
        <AboutUs />
      </div>
    </Router>
  );
}

export default App;
