import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/30 via-white/10 to-white/0 dark:from-[#232946]/40 dark:via-[#18181b]/60 dark:to-[#18181b]/0 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,41,55,0.15)] hover:shadow-[0_12px_48px_0_rgba(99,102,241,0.18)] hover:border-primary/30 transition-all duration-500">
      {/* Image Section */}
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/70 dark:bg-black/60 shadow-md hover:bg-primary/80 hover:text-white text-gray-900 dark:text-white transition-all duration-300"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/70 dark:bg-black/60 shadow-md hover:bg-primary/80 hover:text-white text-gray-900 dark:text-white transition-all duration-300"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-5 pt-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold truncate bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
          {title}
        </h3>

        <p className="text-white/90 text-sm line-clamp-2 mb-1">{description}</p>

        <div className="flex flex-wrap gap-1 mt-1">
          {technologies.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              className="bg-white/30 dark:bg-white/20 text-white border-none px-2 py-0.5 text-[11px] font-medium rounded-full"
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <span className="text-white/70 text-xs ml-1">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
