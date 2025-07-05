import pic from "./images/profilePic.png";

const Introduction = () => {
    return (
        <>
            <div class="profileContainer">
                <img id="profilePic" src={pic}></img>

                <div class="introContent">
                    <h2>Hemble Michael</h2>
                    <p>Sunshine Coast | michyhems@gmail.com</p>
                    <p class="introPara">
                        I’m an IT professional with a Bachelor’s degree in IT
                        and Mathematics. I have a vast amount of experience with
                        regards to problem solving, working in diverse teams and
                        building IT systems. Writing professional project
                        management reports, indepth research in unfamiliar
                        topics and an ability to learn and adapt quickly are
                        also skills that I have developed during my studies.
                    </p>
                    <h3>Skills</h3>
                    <p>
                        C# • C • JavaScript • React • HTML • CSS • Python • SQL
                        • Blender • Object Oriented Programming • Time
                        Management • Project Management • Agile Methodology •
                        Communication • Stakeholder Management • Quick Learner •
                        Analytical Thinking
                    </p>
                </div>
            </div>
        </>
    );
};

export default Introduction;
