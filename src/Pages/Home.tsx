import '../CSS/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text-container">
          <div className="name-wrapper">
            <div className="Left-side-container">
              <h2 className="Intro-left-side">Hi I'm</h2>
              <div className="Left-side-Line"></div>

            </div>
            <h1 className="name">Alton</h1>
            <h2 className="job-title">Frontend Web <br /> Developer</h2>
          </div>
          <div className="Button-Container">
          <button className='continue-button'><a href='/'>Continue</a></button>
          </div>
      </div>
    </div>
  )
}

export default Home