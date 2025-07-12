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
                        I’m an IT professional with a Bachelor’s degree in
                        Information Technologies and Mathematics. I love problem
                        solving and building web applications with React and
                        Node.js. I am familiar with a large body of programming
                        languages and am capable of adapting to any and all
                        situations with a clear and calm disposition.
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
