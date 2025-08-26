// src/components/ProjectCard.jsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Assuming ShadCN Button
import { ArrowRight } from 'lucide-react'; // Import the arrow icon

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:shadow-2xl">
      <Link to={project.link}>
        <img
          className="w-full h-60 object-cover transition-all duration-300 filter grayscale hover:grayscale-0 rounded-t-xl"
          src={project.imageUrl}
          alt={project.title}
        />
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium text-neutral-400">{project.category}</span>
          <span className="text-xs font-medium text-emerald-400">{project.status}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-base text-neutral-400 mb-6 line-clamp-3">
          {project.description}
        </p>
        <Link to={project.link}>
          <Button className="w-full bg-white text-black hover:bg-neutral-200 transition-colors">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;