import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'

const App = () => {
  const [homeVisible, setHomeVisible] = useState(true)
  const [contactVisible, setContactVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)

  const handleHomeClick = async () => {
    setHomeVisible(true)
    setContactVisible(false)
    setProjectsVisible(false)
  }

  const handleContactClick = async () => {
    setContactVisible(true)
    setHomeVisible(false)
    setProjectsVisible(false)
  }

  const handleProjectsClick = async () => {
    setProjectsVisible(true)
    setHomeVisible(false)
    setContactVisible(false)
  }

  return (
    <>
      <NavBar handleHomeClick={handleHomeClick} handleContactClick={handleContactClick} handleProjectsClick={handleProjectsClick} />
      <Routes>
        <Route path='/' element={<Landing homeVisible={homeVisible} contactVisible={contactVisible} projectsVisible={projectsVisible} />} />
      </Routes>
    </>
  )
}

export default App