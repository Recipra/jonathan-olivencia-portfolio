import styles from './Landing.module.css'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Projects from '../../components/Projects/Projects'

const Landing = ({ homeVisible, aboutVisible, contactVisible, projectsVisible}) => {
  return (
    <>
      <div className={styles.landingContainer}>
        {homeVisible && <Home />}
        {aboutVisible && <About />}
        {contactVisible && <Contact />}
        {projectsVisible && <Projects />}
      </div>
    </>
  );
}

export default Landing