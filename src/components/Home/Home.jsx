import styles from './Home.module.css'
import Athena from '../../assets/cute-athena-cropped.jpg'

const Home = () => {
  return (
    <>
      <div>
        <h1>Jonathan Olivencia</h1>
        <h4>Full Stack Software Engineer/Web Developer</h4>
      </div>
      <p>A little about me, I'm a 22 year-old college graduate in General Studies. Having always had an interest in coding, I was too afraid of failure to dive into it. But I recently took the leap and got through an intense 12-week coding bootcamp, and I can proudly say that I am now a learned software engineer.</p>
      <img src={Athena} alt="Cute doggy" className={styles.athena}/>
    </>
  );
}

export default Home;