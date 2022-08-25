import styles from './About.module.css'
import Athena from '../../assets/cute-athena-cropped.jpg'

const About = () => {
  return (
    <>
      <h2>About Me</h2>
      <p>I'm a 22 year-old college graduate in General Studies. Having always had an interest in coding, I was too afraid of failure to dive into it. But I recently took the leap and graduated General Assembly's SEI Remote course, and I can proudly say that I am now a learned software engineer.</p>
        <div className={styles.athenaContainer}>
          <img src={Athena} alt="Cute doggy" className={styles.athena}/>
        </div>
        <p>Here's my dog, Athena, who I love with all my heart. She loves to play fetch and tug-of-war. For me, I enjoy going to the gym, watching shows and movies, and playing video games. As of now, I'm obsessed with Warframe, Rocket League, and Apex Legends.</p>
    </>
  );
}

export default About;