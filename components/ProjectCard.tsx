/* eslint-disable @next/next/no-img-element */

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    github: string;
    live: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-zinc-700 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-emerald-400">
            {project.title}
          </h3>
          <p className="mb-4 text-sm text-gray-200">{project.description}</p>
        </div>
        <div className="flex gap-4 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-1 bg-emerald-600 text-white rounded-full"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-1 bg-sky-600 text-white rounded-full"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}
