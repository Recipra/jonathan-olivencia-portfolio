import styles from './NavBar.module.css'
import Resume from '../../assets/JonathanOlivenciaSoftwareEngineerPortfolioResume.pdf'

const NavBar = ({ handleHomeClick, handleAboutClick, handleContactClick, handleProjectsClick }) => {
  return (
    <>
      <nav>
        <ul>
          <li><button onClick={handleHomeClick}>Home</button></li>
          <li><button onClick={handleAboutClick}>About</button></li>
          <li><button onClick={handleContactClick}>Contact</button></li>
          <li><button onClick={handleProjectsClick}>Projects</button></li>
        </ul>
        <h3 className={styles.resumeLink}><a href={Resume} download='Jonathan Olivencia Resume'>Resume</a></h3>
      </nav>
    </>
  );
}

export default NavBar