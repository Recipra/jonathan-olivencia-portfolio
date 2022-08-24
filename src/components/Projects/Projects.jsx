import styles from './Projects.module.css'
import { projects } from '../../project-data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className={styles.cardContainer}>
        {projects.map((project, idx) =>
          <ProjectCard project={project} key={idx} />
        )}
      </div>
    </>
  );
}

export default Projects;