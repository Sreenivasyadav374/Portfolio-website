import ProjectCard from "./ProjectCard";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import dashboardImage from "@/assets/project-dashboard.jpg";
import mobileImage from "@/assets/project-mobile.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce website with shopping cart, user authentication, and payment integration. Built with React and styled with Tailwind CSS.",
      image: ecommerceImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization dashboard with real-time charts and analytics. Features responsive design and dark mode support.",
      image: dashboardImage,
      technologies: ["React", "Chart.js", "Firebase", "Material-UI", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Mobile-first task management application with drag & drop functionality, team collaboration, and progress tracking.",
      image: mobileImage,
      technologies: ["React Native", "TypeScript", "SQLite", "Redux Toolkit", "React Navigation"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-premium-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-in-up bg-[length:200%_200%] animate-gradient-x">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Here are some of my recent projects that showcase my skills in frontend development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up transform" style={{ animationDelay: `${index * 200}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;