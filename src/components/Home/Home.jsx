import styles from './Home.module.css'
import Me from '../../assets/pfp-cropped.jpg'

const Home = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        <h3>Full Stack Software Engineer/Web Developer</h3>
        <div className={styles.pfpContainer}>
          <img src={Me} alt="Too much swag" className={styles.pfp} />
        </div>
      </div>
    </>
  );
}

export default Home;