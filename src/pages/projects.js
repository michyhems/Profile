import { useState, useEffect } from "react";
import { projectData } from "./projectData";

const Projects = () => {
    const [projectList, setProjectList] = useState([]);

    //declare imported data as a state variable
    useEffect(() => {
        let newProject = [];
        projectData.map((data) => {
            newProject.push(data);
        });
        setProjectList(newProject);
    }, []);

    return (
        <>
            <section>
                {/**Looping over each data entry and generating a list item from it. */}
                <ul class="projectList">
                    {projectList.map((proj) => (
                        //list item container
                        <li class="listItem">
                            {/**Project thumbnail */}
                            <img class="thumbnail" src={proj.thumbnail}></img>

                            {/**Project description and links */}
                            <div class="content">
                                <h2>{proj.title}</h2>
                                <p>{proj.description}</p>

                                {/**Project Links */}
                                <a href={proj.source} target="_blank">
                                    <p class="seeMore">
                                        Click here to view project.
                                    </p>
                                </a>

                                {/**Not all projects have a GitHub repository and so a turnary statement is used to display the link
                                 * only if it exists.
                                 */}
                                {proj.gitRepo !== "" ? (
                                    <a href={proj.gitRepo} target="_blank">
                                        <p>
                                            Click here to see source code in
                                            GitHub.
                                        </p>
                                    </a>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ul>

                {/**Image reference */}
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
            </section>
        </>
    );
};
export default Projects;
