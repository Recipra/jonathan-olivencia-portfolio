import styles from './Home.module.css'
import Me from '../../assets/pfp-cropped.jpg'
import CoolerMe from '../../assets/cooler-pfp.jpg'

const Home = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        <h3>Full Stack Software Engineer/Web Developer</h3>
        <div className={styles.pfpContainer}>
          <img src={Me} alt="Mobile pfp" className={styles.pfp} />
          <img src={CoolerMe} alt="Desktop/tablet pfp" className={styles.coolerPfp} />
        </div>
      </div>
    </>
  );
}

export default Home;