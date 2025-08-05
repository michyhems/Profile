import { useState } from "react";
import Introduction from "./intro";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";

const Homepage = () => {
    const [focus, setFocus] = useState("Introduction");

    //Initialising the app content
    const intro = <Introduction></Introduction>;
    const education = <Education></Education>;
    const experience = <Experience></Experience>;
    const projects = <Projects></Projects>;

    function toggleSidebar() {
        const navButton = document.getElementById("navButton");
        const sidenav = document.getElementById("sidenav");
        sidenav.classList.toggle("close");
        navButton.classList.toggle("rotate");
    }
    //Navbar Content
    let list = (
        <ul>
            {/* Intro page */}
            <li class="logo">
                {/* Alternating the classes and thus the applied css with the state variable in a turnary statement.*/}
                <a>
                    <span>Hemble Michael</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        onClick={() => toggleSidebar()}
                        id="navButton"
                        class="navButton"
                    >
                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                </a>
            </li>
            <li class={focus === "Introduction" ? "active" : null}>
                <a onClick={() => setFocus("Introduction")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                    </svg>
                    <span>Home</span>
                </a>
            </li>

            {/* Education page */}
            <li class={focus === "Education" ? "active" : null}>
                <a onClick={() => setFocus("Education")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z" />
                    </svg>
                    <span>Education</span>
                </a>
            </li>

            {/* Experience page */}
            <li class={focus === "Experience" ? "active" : null}>
                <a onClick={() => setFocus("Experience")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
                    </svg>
                    <span>Experience</span>
                </a>
            </li>

            {/* Projects page */}
            <li class={focus === "Projects" ? "active" : null}>
                <a onClick={() => setFocus("Projects")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
                    </svg>
                    <span>Projects</span>
                </a>
            </li>
        </ul>
    );

    {
        /* Determining the view based on the state variable: focus */
    }
    let view =
        focus === "Introduction"
            ? intro
            : focus === "Education"
            ? education
            : focus === "Experience"
            ? experience
            : focus === "Projects"
            ? projects
            : null;

    return (
        <>
            <div class="body">
                <nav id="sidenav" class="sidenav">
                    {list}
                </nav>
                <main>{view}</main>
            </div>
        </>
    );
};

export default Homepage;
