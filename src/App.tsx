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
import {MailAlice} from "./components/main/MailAlice/MailAlice";

// Cursor Animation
import AnimatedCursor from "react-animated-cursor";

const App = () => {
    return (
        <div className="min-h-screen m-0 p-0">
            
            <AnimatedCursor innerSize={8} outerSize={30} innerScale={1} outerScale={2} outerAlpha={0} innerStyle={{backgroundColor: "", zIndex: 9999}} outerStyle={{border: "2px solid black"}} />

            <Navbar />

            <main>
                <Section component={<Hero />} />
                <Section component={<MyAdvantage />} />
                <Section component={<EducationExperience />} sectionId="LatestProjects" />
                <Section component={<LatestProjects />} />
                <br></br><br></br><br></br><br></br>
                <Section component={<MailAlice />} />
            </main>
            <Footer />
        </div>
    );
};

// Reusable Section Wrapper with FadeEffect
const Section = ({component, sectionId}: any) => <FadeEffect sectionId={sectionId}>{component}</FadeEffect>;

export default App;
