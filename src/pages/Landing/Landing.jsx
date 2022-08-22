import styles from './Landing.module.css'

const Landing = ({ homeVisible, contactVisible, projectsVisible}) => {
  return (
    <>
      <div className={styles.pageContainer}>
        {homeVisible && <h2>this is the home page</h2>}
        {contactVisible && <h2>this is the contact page</h2>}
        {projectsVisible && <h2>this is the project page</h2>}
      </div>
    </>
  );
}

export default Landing