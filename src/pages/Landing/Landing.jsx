import styles from './Landing.module.css'
import Home from '../../components/Home/Home'
import Contact from '../../components/Contact/Contact'
import Projects from '../../components/Projects/Projects'

const Landing = ({ homeVisible, contactVisible, projectsVisible}) => {
  return (
    <>
      <div className={styles.pageContainer}>
        {homeVisible && <Home />}
        {contactVisible && <Contact />}
        {projectsVisible && <Projects />}
      </div>
    </>
  );
}

export default Landing