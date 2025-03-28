// Main CSS
import "./App.css";

// Global Components
import {Navbar} from "./components/globals/Navbar";
import {Footer} from "./components/globals/Footer";
import {FadeEffect} from "./components/globals/FadeEffect";

// Main Components
import Hero from "./components/main/Hero/Hero";
import {MyAdvantage} from "./components/main/MyAdvantage/MyAdvantage";
import EducationExperience from "./components/main/EducationExperience/EducationExperience";
import {LatestProjects} from "./components/main/LatestProjects/LatestProjects";
import {Mail} from "./components/main/Mail/Mail";
import {Certification}from "./components/main/Certification/Certification";

// Cursor Animation
import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from 'react';

const App = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isDark]);

    return (
        <div className="min-h-screen m-0 p-0">
            <button 
                onClick={() => setIsDark(!isDark)}
                className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
                {isDark ? '🌞' : '🌙'}
            </button>
            
            <AnimatedCursor innerSize={8} outerSize={30} innerScale={1} outerScale={2} outerAlpha={0} innerStyle={{backgroundColor: "", zIndex: 9999}} outerStyle={{border: "2px solid black"}} />

            <Navbar />

            <main>
                <Section component={<Hero />} />
                <Section component={<MyAdvantage />} />
                <Section component={<EducationExperience />} sectionId="LatestProjects" />
                <Section component={<LatestProjects />} />
                <Section component={<Certification />} />
                <br></br><br></br><br></br><br></br>
                <Section component={<Mail />} />
            </main>
            <Footer />
        </div>
    );
};

// Reusable Section Wrapper with FadeEffect
const Section = ({component, sectionId}: any) => <FadeEffect sectionId={sectionId}>{component}</FadeEffect>;

export default App;