import styles from './Contact.module.css'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

const Contact = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <div className={styles.iconContainer}>
        <a href="https://github.com/Recipra" target='_blank' rel='noreferrer noopener'><GoMarkGithub className={styles.icons} /></a>
        <a href="https://www.linkedin.com/in/jonathan-olivencia/" target='_blank' rel='noreferrer noopener'><BsLinkedin className={styles.icons} /></a>
        <a href="mailto:jmo0425@outlook.com"><GrMail className={styles.icons} /></a>
      </div>
    </>
  );
}

export default Contact;