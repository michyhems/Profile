import { useState, useEffect } from "react";
import { projectData } from "./projectData";
import sadokuIcon from "./images/sadokuIcon.png";
import profileIcon from "./images/user.png";

const Projects = () => {
    const [projectList, setProjectList] = useState([]);
    const icons = [profileIcon, sadokuIcon, sadokuIcon, sadokuIcon];
    useEffect(() => {
        let newProject = [];
        projectData.map((data) => {
            newProject.push(data);
        });
        setProjectList(newProject);
    }, []);

    return (
        <>
            <ul class="projectList">
                {projectList.map((proj) => (
                    <li class="listItem">
                        <img class="thumbnail" src={proj.thumbnail}></img>

                        <div class="content">
                            <h2>{proj.title}</h2>
                            <p>{proj.description}</p>
                            <a href={proj.source} target="_blank">
                                <p class="seeMore">View.</p>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
            <p>
                Profile image by{" "}
                <a
                    style={{ color: "blue" }}
                    href="https://www.flaticon.com/authors/md-tanvirul-haque"
                    target="_blank"
                >
                    Md Tanvirul Haque
                </a>
            </p>
        </>
    );
};
export default Projects;
