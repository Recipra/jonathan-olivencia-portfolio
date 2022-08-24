import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className={styles.card}>
        <img src={project.image} alt={project.name} className={styles.projectImage} />
        <div className={styles.cardContent}>
          <h3 className={styles.projectName}>{project.name}</h3>
          <div className={styles.projectLinks}>
            <h4><a href={project.live} target='_blank' rel='noreferrer noopener'>Live</a></h4>
            <h4><a href={project.github} target='_blank' rel='noreferrer noopener'>GitHub</a></h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;