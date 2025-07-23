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
    <Card className="group relative overflow-hidden rounded-xl border border-border bg-background/50 backdrop-blur-md transition-transform duration-500 hover:scale-[1.03] hover:shadow-projects-premium hover:border-primary/50 ease-projects-premium">
      {/* Image Section */}
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-projects-premium group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex gap-3">
          {liveUrl && (
            <Button
              size="sm"
              className="relative overflow-hidden group/btn flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-projects-glow hover:shadow-projects-hover transition-all duration-500 ease-projects-premium transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ExternalLink size={16} />
                Live Demo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            </Button>
          )}

          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-500 ease-projects-premium transform hover:scale-105 hover:shadow-projects-glow"
            >
              <Github size={16} />
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
