import "../CSS/TechStack.css"
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"


const TechStack = () =>{

    useEffect (() => {
        AOS.init({duration: 2000, once: true}) //Fade-In component
      }, []);



    return(
        <>
        <div className="TechStackContainer" data-aos="fade-up">
            <h1>What I Work With</h1>
            <div className="Underline1"></div>
            <div className="Info-Container">
                <h2>Core Web Tech</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className="Info-Container">
                <h2>Tools & Frameworks</h2>
                <ul>
                    <li>React.Js</li>
                    <li>Git & Github</li>
                    <li>VScode</li>
                    <li>npm / vite</li>
                </ul>
            </div>
            <div className="Info-Container">
                <h2>Design & UI</h2>
                <ul>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Responsive Design</li>
                    <li>Tailwind Css</li>
                </ul>
            </div>
            <div className="BuildInfo-container">
                <h1>Behind the Build</h1>
                <div className="Underline2"></div>
                <p>
                    I build responsive, user-focused websites using HTML, CSS, and 
                    JavaScript. With React, I create interactive interfaces that 
                    feel smooth and modern. I use tools like VS Code, GitHub, and 
                    Vite to stay efficient and organized throughout my workflow. 
                    Before I code, I map out designs and user flows in Figma or 
                    Adobe XD to make sure everything looks and feels right. Every 
                    tool I use helps me turn ideas into clean, functional web 
                    experiences.
                </p>
            </div>
            <div>
                <button className="Project-button"><a href="/projects">Check Out My Project</a></button>
            </div>
        </div>
        </>
    )

}

export default TechStack