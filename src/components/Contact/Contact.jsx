import styles from './Contact.module.css'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { GrMailOption } from 'react-icons/gr'

const Contact = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <div>
        <a href="https://github.com/Recipra" target='_blank' rel='noreferrer noopener'><GoMarkGithub size='30px' color='black' /></a>
        <a href="https://www.linkedin.com/in/jonathan-olivencia/" target='_blank' rel='noreferrer noopener'><BsLinkedin size='30px' color='black' /></a>
        <a href="mailto:jmo0425@outlook.com"><GrMailOption size='30px' /></a>
      </div>
    </>
  );
}

export default Contact;