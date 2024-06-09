import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ title, description, link, repo }) {
  return (
    <div className="border rounded-lg border-gray-300 p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        {link && (
          <a
            href={link}
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="inline-block mr-2" />
            Live Demo
          </a>
        )}
        {repo && (
          <a
            href={repo}
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="inline-block mr-2" />
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div id="projects" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard
          title="Project 1"
          description="Description of project 1."
          link="https://example.com/project1"
          repo="https://github.com/username/project1"
        />
        <ProjectCard
          title="Project 2"
          description="Description of project 2."
          link="https://example.com/project2"
          repo="https://github.com/username/project2"
        />
        <ProjectCard
          title="Project 3"
          description="Description of project 3."
          link="https://example.com/project3"
          repo="https://github.com/username/project3"
        />
      </div>
    </div>
  );
}
