import styles from './Projects.module.css'
import { projects } from '../../project-data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        <h2>Projects</h2>
        <div className={styles.cardContainer}>
          {projects.map((project, idx) =>
            <ProjectCard project={project} key={idx} />
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;