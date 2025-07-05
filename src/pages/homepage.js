import { useState } from "react";
import Introduction from "./intro";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import ProfilePic from "./images/profilePic.png";

const Homepage = () => {
    const [focus, setFocus] = useState("Introduction");
    const intro = <Introduction></Introduction>;
    const education = <Education></Education>;
    const experience = <Experience></Experience>;
    const projects = <Projects></Projects>;

    return (
        <>
            <div class="sidenav">
                <p onClick={() => setFocus("Introduction")} class="name">
                    <img id="sidenavPic" src={ProfilePic}></img>
                    Hemble Michael
                </p>
                <a
                    onClick={() => setFocus("Education")}
                    style={{ color: focus === "Education" ? "white" : null }}
                >
                    Education
                </a>
                <a
                    onClick={() => setFocus("Experience")}
                    style={{ color: focus === "Experience" ? "white" : null }}
                >
                    Experience
                </a>
                <a
                    onClick={() => setFocus("Projects")}
                    style={{ color: focus === "Projects" ? "white" : null }}
                >
                    Projects
                </a>
            </div>
            <div id="display">
                {focus === "Introduction"
                    ? intro
                    : focus === "Education"
                    ? education
                    : focus === "Experience"
                    ? experience
                    : focus === "Projects"
                    ? projects
                    : null}
            </div>
        </>
    );
};

export default Homepage;
