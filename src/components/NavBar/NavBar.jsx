import styles from './NavBar.module.css'

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
        <h3 className={styles.resumeLink}><a href="https://docs.google.com/document/d/1ef4aJaHu2QDmkyktrtzqIbG5peDOv8LknlK9u0oJs4Q" target='_blank' rel='noreferrer noopener'>Resume</a></h3>
      </nav>
    </>
  );
}

export default NavBar