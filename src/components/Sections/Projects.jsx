import { Container } from '../Layout/Container';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data/projects';

export const Projects = () => (
  <section id="projects" className="min-h-screen bg-primary py-20">
    <Container>
      <h2 className="font-paytone text-4xl font-bold text-accent mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Container>
  </section>
);

export default Projects;
