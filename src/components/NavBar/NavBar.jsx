import styles from './NavBar.module.css'

const NavBar = ({ handleHomeClick, handleContactClick, handleProjectsClick }) => {
  return (
    <>
      <nav>
        <ul>
          <li><button onClick={handleHomeClick}>Home</button></li>
          <li><button onClick={handleContactClick}>Contact Me</button></li>
          <li><button onClick={handleProjectsClick}>Projects</button></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar