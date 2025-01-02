import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
};

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  techStack, 
  githubLink, 
  liveLink 
}: ProjectProps) {
  return (
    <div className="card flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <div className="flex flex-col flex-grow">
        <div className="space-y-4 mt-4">
          <h3 className="text-xl font-semibold">
            {title}
          </h3>
          <p className="font-mono">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-auto pt-4">
          <a 
            href={githubLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="button flex items-center gap-1"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button flex items-center gap-1"
            >
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}