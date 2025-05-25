import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProjects from './Pages/Projects'
import TechStack from './Pages/WorkWith'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/techstack" element={<TechStack />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
