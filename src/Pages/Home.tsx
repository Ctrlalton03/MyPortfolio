import '../CSS/Home.css'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"


const Home = () => {

useEffect (() => {
  AOS.init({duration: 2000, once: true}) //Fade-In component
}, []);


  return (
    <div className="home-container" data-aos="fade-up">
      <div className="home-text-container">
          <div className="name-wrapper">
            <div className="Left-side-container">
              <h2 className="Intro-left-side">Hi I'm</h2>
              <div className="Left-side-Line"></div>
            </div>
           <div className="Name-Container">
            <div className="Name-Left-side-Line"></div>
            <h1 className="name">Alton</h1>
            <div className="Name-Right-side-Line"></div>
           </div>
            <div className="Bottom-side-container">
              <div className="Right-side-Line"></div>
              <h2 className="job-title">Frontend Web <br /> Developer</h2>
            </div>
          </div>
          <div className="Button-Container">
          <button className='continue-button'><a href='/techstack'>Continue</a></button>
          </div>
      </div>
    </div>
  )
}

export default Home