import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import './App.css'

const App = () => {
  const [homeVisible, setHomeVisible] = useState(true)
  const [aboutVisible, setAboutVisible] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)

  const handleHomeClick = async () => {
    setHomeVisible(true)
    setAboutVisible(false)
    setContactVisible(false)
    setProjectsVisible(false)
  }

  const handleAboutClick = async () => {
    setAboutVisible(true)
    setHomeVisible(false)
    setContactVisible(false)
    setProjectsVisible(false)
  }

  const handleContactClick = async () => {
    setContactVisible(true)
    setHomeVisible(false)
    setAboutVisible(false)
    setProjectsVisible(false)
  }

  const handleProjectsClick = async () => {
    setProjectsVisible(true)
    setHomeVisible(false)
    setAboutVisible(false)
    setContactVisible(false)
  }

  return (
    <>
      <div className='page-content'>
        <h1>Jonathan Olivencia</h1>
        <Routes>
          <Route path='/' element={<Landing homeVisible={homeVisible} aboutVisible={aboutVisible} contactVisible={contactVisible} projectsVisible={projectsVisible} />} />
        </Routes>
        <NavBar handleHomeClick={handleHomeClick} handleAboutClick={handleAboutClick} handleContactClick={handleContactClick} handleProjectsClick={handleProjectsClick} className='nav-bar'/>
      </div>
    </>
  )
}

export default App